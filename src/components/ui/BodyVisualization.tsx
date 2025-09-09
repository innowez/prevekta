'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface BodyVisualizationProps {
  className?: string;
  imageUrl?: string;
  height?: number;
}

const BodyVisualization: React.FC<BodyVisualizationProps> = ({ 
  className = '',
  imageUrl = '/humanbody.png',
  height = 550
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<{
    renderer?: THREE.WebGLRenderer;
    scene?: THREE.Scene;
    camera?: THREE.PerspectiveCamera;
    particles?: THREE.Points;
    animationId?: number;
    ww?: number;
    wh?: number;
  }>({});

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let particles: THREE.Points;
    let imagedata: ImageData;
    let animationId: number;
    let ww = window.innerWidth;
    let wh = height;

    const centerVector = new THREE.Vector3(0, 0, 0);

    const getImageData = (image: HTMLImageElement): ImageData => {
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(image, 0, 0);
      return ctx.getImageData(0, 0, image.width, image.height);
    };

    const drawTheMap = () => {
      const geometry = new THREE.BufferGeometry();
      const positions: number[] = [];
      const vertices: Array<{
        x: number;
        y: number;
        z: number;
        destination: { x: number; y: number; z: number };
        speed: number;
      }> = [];

      // Scale to fit within container with 9:17 aspect ratio (width:height) - increased size
      const aspectRatio = 9 / 17;
      const targetWidth = 500; // Increased from 500
      const targetHeight = targetWidth / aspectRatio;
      const scaleFactor = Math.min(targetWidth / imagedata.width, targetHeight / imagedata.height);

      // Create particles with larger spacing
      for (let y = 0; y < imagedata.height; y += 12) {
        for (let x = 0; x < imagedata.width; x += 12) {
          if (imagedata.data[(x * 4 + y * 4 * imagedata.width) + 3] > 128) {
            const vertex = {
              x: Math.random() * 1000 - 500,
              y: Math.random() * 1000 - 500,
              z: -Math.random() * 500,
              destination: {
                x: (x - imagedata.width / 2) * scaleFactor,
                y: (-y + imagedata.height / 2) * scaleFactor,
                z: (Math.random() - 0.5) * 50
              },
              speed: Math.random() / 200 + 0.015
            };

            vertices.push(vertex);
            positions.push(vertex.x, vertex.y, vertex.z);
          }
        }
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      
      // Create circular particle texture
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d')!;
      
      // Draw a circle
      ctx.clearRect(0, 0, 32, 32);
      ctx.fillStyle = '#313742';
      ctx.beginPath();
      ctx.arc(16, 16, 15, 0, Math.PI * 2);
      ctx.fill();
      
      const texture = new THREE.CanvasTexture(canvas);
      
      const material = new THREE.PointsMaterial({
        size: 2.5,
        color: 0x313742,
        sizeAttenuation: false,
        map: texture,
        transparent: true,
        alphaTest: 0.1
      });

      particles = new THREE.Points(geometry, material);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (particles as any).vertices = vertices;

      scene.add(particles);
      render();
    };

    const onResize = () => {
      ww = window.innerWidth;
      wh = height;
      renderer.setSize(ww, wh);
      camera.aspect = ww / wh;
      camera.updateProjectionMatrix();
    };

    const render = (time = 0) => {
      animationId = requestAnimationFrame(render);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const vertices = (particles as any).vertices;
      const positions = particles.geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < vertices.length; i++) {
        const particle = vertices[i];
        particle.x += (particle.destination.x - particle.x) * particle.speed;
        particle.y += (particle.destination.y - particle.y) * particle.speed;
        particle.z += (particle.destination.z - particle.z) * particle.speed;

        positions[i * 3] = particle.x;
        positions[i * 3 + 1] = particle.y;
        positions[i * 3 + 2] = particle.z;
      }

      particles.geometry.attributes.position.needsUpdate = true;
      camera.position.x = Math.sin(time / 5000) * 100;
      camera.lookAt(centerVector);

      renderer.render(scene, camera);
    };

    const init = () => {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true
      });
      renderer.setSize(ww, wh);
      renderer.setClearColor(0x000000, 0);

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(50, ww / wh, 0.1, 10000);
      camera.position.set(-100, 0, 500); // Moved back for larger view
      camera.lookAt(centerVector);
      scene.add(camera);

      const textureLoader = new THREE.TextureLoader();
      textureLoader.load(imageUrl, (texture) => {
        imagedata = getImageData(texture.image);
        drawTheMap();
      });

      window.addEventListener('resize', onResize, false);

      // Store references after initialization
      sceneRef.current = {
        renderer,
        scene,
        camera,
        particles,
        animationId,
        ww,
        wh
      };
    };

    init();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener('resize', onResize, false);
      if (renderer) {
        renderer.dispose();
      }
      if (scene) {
        scene.clear();
      }
    };
  }, [imageUrl, height]);

  return (
    <div className={`w-full ${className}`} style={{ height: `${height}px`, overflow: 'hidden' }}>
      <canvas
        ref={canvasRef}
        className="w-full"
        style={{
          display: 'block',
          padding: 0,
          margin: 0,
          height: `${height}px`
        }}
      />
    </div>
  );
};

export default BodyVisualization;
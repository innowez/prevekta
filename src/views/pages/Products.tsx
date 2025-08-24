"use client";
import { useEffect } from "react";
import LounchSection from "@/components/layout/ProductsSection/LounchSection";
import AyurvedaSection from "@/components/layout/ProductsSection/AyurvedaSection";
import ContactSection from "@/components/layout/HomeSection/ContactSection";
import ProductSliderSection from "@/components/layout/ProductsSection/ProductSliderSection";

const Products: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Window width:", window.innerWidth);
    }
  }, []);

  return (
    <>
      <LounchSection />
      <AyurvedaSection />
      <ProductSliderSection/>
      <ContactSection />
    </>
  );
};

export default Products;

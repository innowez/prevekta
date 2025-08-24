import * as React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  fill?: string;
}

const ArrowRightThin: React.FC<IconProps> = (props) => (
  <svg
    width={props.width || 24}
    height={props.height || 16}
    viewBox="0 0 24 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.0652 7.49677L17.064 0.745493C16.7502 0.426142 16.2947 0.428852 16.0032 0.692749C15.7117 0.956642 15.6865 1.46199 15.9504 1.7535L20.8382 7.25065L1.49823 7.25065C1.08392 7.25065 0.748047 7.58649 0.748047 8.0008C0.748047 8.4151 1.08392 8.75094 1.49823 8.75094L20.8382 8.75094L15.9504 14.2481C15.6865 14.5396 15.7204 15.0356 16.0032 15.3088C16.2976 15.5932 16.8001 15.5476 17.064 15.2561L23.0652 8.50478C23.3303 8.13424 23.2987 7.82027 23.0652 7.49677Z"
      fill={props.fill } 
    />
  </svg>
);

export default ArrowRightThin;

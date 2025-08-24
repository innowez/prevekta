
import * as React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
    width?: number;
    height?: number;
    fill?: string;
}

const ArrowRightThin: React.FC<IconProps> = (props) => (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.14922 5.7724L3.20547 5.83806L7.45547 10.7312C7.59922 10.8969 7.81484 11.0001 8.05547 11.0001C8.29609 11.0001 8.51172 10.8938 8.65547 10.7312L12.9023 5.84744L12.9742 5.76615C13.0273 5.68798 13.0586 5.59418 13.0586 5.49413C13.0586 5.22211 12.8273 5.00012 12.5398 5.00012H3.57734C3.28984 5.00012 3.05859 5.22211 3.05859 5.49413C3.05859 5.59731 3.09297 5.69423 3.14922 5.7724Z" fill="#132D47" />
    </svg>

);

export default ArrowRightThin;

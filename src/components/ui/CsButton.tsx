"use client";

import ArrowRightThin from "@/assets/icons/ArrowRightThin";
import { cn } from "@/lib/utils";
import React from "react";

type ButtonVariant = "fill" | "outline";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  showIcon?: boolean;
  loading?: boolean;
}

const CsButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "fill", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className="uppercase text-base font-[Duplet] p-4 rounded-full border border-primary text-primary relative"
      >
        <span className="pr-10">{children ?? "CsButton"}</span>
        <div className="w-[22.5px] h-[15px] transition-transform duration-300 ease-out group-hover:-rotate-45 absolute top-1/2 right-3 -translate-y-1/2">
          <ArrowRightThin
            fill="currentColor"
            className={cn(
              "transition-colors duration-300 ease-out",
              variant === "fill" && "text-[#132d47] group-hover:text-white",
              variant === "outline" && "text-[#132d47] group-hover:text-white"
            )}
          />
        </div>
      </button>
    );
  }
);

CsButton.displayName = "CsButton";

export default CsButton;

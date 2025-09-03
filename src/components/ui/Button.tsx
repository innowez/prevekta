import React from "react";
import { cn } from "@/lib/utils";
import ArrowRightThin from "@/assets/icons/ArrowRightThin";

type ButtonVariant = "fill" | "outline";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  showIcon?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "fill",
      size = "md",
      children,
      showIcon = false,
      loading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          "group relative overflow-hidden cursor-pointer transition-all duration-300 ease-out",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          // Size classes
          size === "sm" && "h-10",
          size === "md" && "h-12 md:h-[57.5px]", 
          size === "lg" && "h-14",
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
        style={{ width: 'auto', minWidth: size === "sm" ? "120px" : size === "lg" ? "160px" : "140px" }}
      >
        {/* Main Button Content */}
        <div
          className={cn(
            "relative flex items-center justify-center font-[Duplet] uppercase font-medium",
            "rounded-full border whitespace-nowrap h-full transition-all duration-300 ease-out",
            // Size-based padding and text
            size === "sm" && "px-4 text-sm",
            size === "md" && "px-6 text-base md:text-[18px]",
            size === "lg" && "px-8 text-lg",
            // Icon padding
            showIcon && (size === "sm" ? "pr-10" : size === "lg" ? "pr-16" : "pr-12 md:pr-14"),
            // Fill variant
            variant === "fill" && [
              "bg-[#81de76] border-[#81de76] text-[#132d47]",
              "group-hover:bg-[#132d47] group-hover:text-white group-hover:border-[#132d47]"
            ],
            // Outline variant  
            variant === "outline" && [
              "bg-transparent border-[#132d47] text-[#132d47]",
              "group-hover:bg-[#132d47] group-hover:text-white"
            ]
          )}
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              <span>Loading...</span>
            </div>
          ) : (
            children
          )}
        </div>
        
        {/* Icon Container */}
        {showIcon && !loading && (
          <div
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center",
              "rounded-full transition-all duration-300 ease-out",
              // Icon sizes
              size === "sm" && "w-6 h-6",
              size === "md" && "w-12 h-12 md:w-[55px] md:h-[56px]",
              size === "lg" && "w-14 h-14",
              // Fill variant icon
              variant === "fill" && [
                "bg-[#81de76]",
                "group-hover:bg-[#132d47]"
              ],
              // Outline variant icon
              variant === "outline" && [
                "bg-transparent border border-[#132d47]",
                "group-hover:bg-[#132d47] group-hover:border-[#132d47]"
              ]
            )}
          >
            <div className="w-[22.5px] h-[15px] transition-transform duration-300 ease-out group-hover:-rotate-45">
              <ArrowRightThin 
                fill="currentColor"
                className={cn(
                  "transition-colors duration-300 ease-out",
                  variant === "fill" && "text-[#132d47] group-hover:text-white",
                  variant === "outline" && "text-[#132d47] group-hover:text-white"
                )}
              />
            </div>
          </div>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
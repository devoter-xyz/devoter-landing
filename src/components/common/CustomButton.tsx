import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * CustomButton component for accessible and semantic button usage.
 *
 * @param {React.ReactNode} children - Button content
 * @param {"default" | "transparent"} [variant] - Button style variant
 * @param {() => void} [onClick] - Click handler
 * @param {React.ReactNode} [leftIcon] - Icon on the left
 * @param {React.ReactNode} [rightIcon] - Icon on the right
 * @param {string} [className] - Additional class names
 * @param {string} [ariaLabel] - Accessible label for screen readers
 * @param {any} [props] - Other button props
 */
interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "transparent" | "primary" | "secondary" | "ghost";
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export function CustomButton({
  children,
  variant = "primary", // Changed default variant to 'primary'
  onClick,
  leftIcon,
  rightIcon,
  className,
  ariaLabel,
  ...props
}: CustomButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        variant === "transparent" && "bg-transparent border border-primary hover:bg-primary/10",
        variant === "primary" && "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
        className
      )}
      aria-label={ariaLabel}
      {...props}
    >
      {leftIcon && <span className="mr-1" aria-hidden="true">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-1" aria-hidden="true">{rightIcon}</span>}
    </Button>
  );
}
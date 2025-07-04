import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Extend React's ButtonHTMLAttributes for native button props
interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "transparent";
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  // No need for [key: string]: any; anymore
}

export function CustomButton({
  children,
  variant = "default",
  onClick,
  leftIcon,
  rightIcon,
  className,
  ...props
}: CustomButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        variant === "transparent" && "bg-transparent border border-primary hover:bg-primary/10",
        className
      )}
      {...props}
    >
      {leftIcon && <span className="mr-1">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-1">{rightIcon}</span>}
    </Button>
  );
}
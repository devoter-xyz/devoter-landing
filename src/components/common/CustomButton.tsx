import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CustomButtonProps {
  children: React.ReactNode;
  type?: "default" | "transparent";
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function CustomButton({
  children,
  type = "default",
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
        type === "transparent" && "bg-transparent border border-primary hover:bg-primary/10",
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
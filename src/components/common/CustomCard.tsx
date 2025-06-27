import React from "react";
import { cn } from "@/lib/utils";

interface CustomCardProps {
  children: React.ReactNode;
  type?: "default" | "transparent";
  className?: string;
}

export function CustomCard({
  children,
  type = "default",
  className,
}: CustomCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg p-4 shadow-sm",
        type === "default" && "bg-white dark:bg-gray-800",
        type === "transparent" && "backdrop-blur-sm bg-white/10 border border-white/20",
        className
      )}
    >
      {children}
    </div>
  );
} 
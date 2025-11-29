import React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

interface CustomCardProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "default" | "transparent";
}

/**
 * CustomCard component for semantic and accessible card containers.
 *
 * @param {React.ReactNode} children - Card content
 * @param {"default" | "transparent"} [type] - Card style variant
 * @param {string} [className] - Additional class names
 * @param {React.ReactNode} [header] - Card header
 * @param {React.ReactNode} [title] - Card title
 * @param {React.ReactNode} [footer] - Card footer
 * @param {"article" | "section"} [as] - Semantic element to render
 * @param {any} [props] - Other props
 */
export const CustomCard = React.forwardRef<HTMLDivElement, CustomCardProps>(
  ({ className, type = "default", children, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          type === "transparent" &&
            "backdrop-blur-sm bg-white/10 border border-white/20 bg-transparent",
          className
        )}
        {...props}
      >
        {children}
      </Card>
    );
  }
);
CustomCard.displayName = "CustomCard";
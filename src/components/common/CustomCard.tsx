import React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

interface CustomCardProps {
  children: React.ReactNode;
  type?: "default" | "transparent";
  className?: string;
  header?: React.ReactNode;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  as?: "article" | "section";
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
export function CustomCard({
  children,
  type = "default",
  className,
  header,
  title,
  footer,
  as: Component = "article",
  ...props
}: CustomCardProps) {
  return (
    <Component>
    <Card
      className={cn(
        type === "transparent" && "backdrop-blur-sm bg-white/10 border border-white/20 bg-transparent",
        className
      )}
      {...props}
    >
      {(header || title) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {header}
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
    </Component>
  );
}
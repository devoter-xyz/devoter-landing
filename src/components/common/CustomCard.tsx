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
}

export function CustomCard({
  children,
  type = "default",
  className,
  header,
  title,
  footer,
  ...props
}: CustomCardProps) {
  return (
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
  );
} 
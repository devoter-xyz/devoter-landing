import React from 'react';
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badgeText?: string;
  badgeIcon?: React.ElementType;
  heading: string;
  description: string;
  headingId: string;
  className?: string;
  headingClassName?: string;
  descriptionClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  badgeIcon: BadgeIcon,
  heading,
  description,
  headingId,
  className,
  headingClassName,
  descriptionClassName,
}) => {
  return (
    <header className={cn("text-center", className)}>
      {badgeText && BadgeIcon && (
        <div className="inline-block bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
          <p className="flex items-center text-sm font-semibold justify-center">
            <BadgeIcon size={16} className="mr-2" />
            {badgeText}
          </p>
        </div>
      )}

      <h2
        id={headingId}
        className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4",
          headingClassName
        )}
      >
        {heading}
      </h2>

      <p className={cn("text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto", descriptionClassName)}>
        {description}
      </p>
    </header>
  );
};

export default SectionHeader;

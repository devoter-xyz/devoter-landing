import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const gradientButtonVariants = cva(
  'inline-flex items-center justify-center rounded-lg px-8 py-3 font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-to-r from-secondary to-accent',
        secondary: 'bg-transparent border-2 border-white/50 hover:bg-white/10 hover:border-white',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof gradientButtonVariants> {}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        className={cn(gradientButtonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

GradientButton.displayName = 'GradientButton';

export { GradientButton, gradientButtonVariants }; 
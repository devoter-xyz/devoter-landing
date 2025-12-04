import React from 'react';

interface CarouselSkeletonProps {
  className?: string;
}

const CarouselSkeleton: React.FC<CarouselSkeletonProps> = ({ className }) => {
  return (
    <div className={`relative aspect-[4/2.8] overflow-hidden rounded-xl bg-gray-300 dark:bg-gray-800 animate-shimmer ${className}`}>
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        .animate-shimmer {
          background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
          background-size: 1000px 100%;
          animation: shimmer 1.5s infinite linear;
        }
        .dark .animate-shimmer {
          background: linear-gradient(to right, #333333 4%, #444444 25%, #333333 36%);
          background-size: 1000px 100%;
          animation: shimmer 1.5s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default CarouselSkeleton;
"use client";

import Carousel from "./ui/carousel";

const dummyItems = [
  { id: 1, src: "/interface/devoter-1.png", alt: "Devoter Interface Screenshot 1" },
  { id: 2, src: "/interface/devoter-3.png", alt: "Devoter Interface Screenshot 3" },
  { id: 3, src: "/interface/devoter-4.png", alt: "Devoter Interface Screenshot 4" },
  { id: 4, src: "/interface/devoter-5.png", alt: "Devoter Interface Screenshot 5" },
];

export function CarouselTestHarness() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Carousel Test Harness</h2>
        <div className="max-w-xl mx-auto">
          <Carousel items={dummyItems} autoPlay={false} className="w-full" />
        </div>
        <p className="text-center mt-4 text-muted-foreground">
          Use left and right arrow keys to navigate the carousel.
        </p>
      </div>
    </section>
  );
}

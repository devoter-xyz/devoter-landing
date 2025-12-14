import { Zap } from "lucide-react";
import Link from "next/link";
import Carousel from "@/components/ui/carousel";
import CarouselSkeleton from "@/components/ui/carousel-skeleton";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate 3 seconds of loading

    return () => clearTimeout(timer);
  }, []);
  const carouselItems = [
    {
      id: 1,
      src: "/interface/dash.svg",
      alt: "Dashboard preview",
    },
    {
      id: 2,
      src: "/interface/devoter-1.png",
      alt: "Analytics dashboard",
    },
    {
      id: 3,
      src: "/interface/devoter-3.png",
      alt: "Data visualization",
    },
    {
      id: 4,
      src: "/interface/devoter-5.png",
      alt: "Web3 interface",
    },
    {
      id: 5,
      src: "/interface/devoter-5.png",
      alt: "Web3 collaboration",
    }
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center bg-gradient-to-b from-primary/10 to-background text-foreground pt-24 sm:pt-28 md:pt-2">
      <div className="absolute inset-0 z-0 overflow-hidden animated-gradient-background"></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Text & CTAs */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          {/* Tagline Badge */}
          <div className="inline-block bg-primary/30 border border-secondary rounded-full px-4 py-1.5 mb-6">
            <p className="flex items-center text-sm font-semibold justify-center md:justify-start">
              <Zap
                size={16}
                className="mr-2 animate-pulse fill-orange-500 text-orange-600"
              />
              Web3 Repository Discovery Platform
            </p>
          </div>

          {/* Hero Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
            Empowering Web3
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              Repository Discovery
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0 mb-8">
            Through Community Voting in the web3 Ecosystem
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 mb-8">
            <Link
              href="#"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-secondary to-accent text-primary-foreground font-semibold shadow-lg hover:scale-105 duration-300 transition-transform"
            >
              Start Voting
            </Link>
            <Link
              href="#features"
              className="px-6 py-3 rounded-full bg-accent/10 border border-accent text-accent-foreground font-semibold hover:bg-accent/20 hover:scale-105 duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>

        {/* Right: Dashboard Carousel */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          {isLoading ? (
            <CarouselSkeleton className="max-w-2xl w-full" />
          ) : (
            <Carousel
              items={carouselItems}
              autoPlay={true}
              autoPlayInterval={5000}
              className="max-w-2xl w-full"
            />
          )}
        </div>
      </div>
    </section>
  );
}

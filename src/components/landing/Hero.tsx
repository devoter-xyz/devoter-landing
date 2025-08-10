import { Zap } from "lucide-react";
import Link from "next/link";
import Carousel from "@/components/ui/carousel";

export default function Hero() {
  const carouselItems = [
    {
      id: 1,
      src: "/dash.svg",
      alt: "Dashboard preview",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Analytics dashboard",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Data visualization",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Web3 interface",
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center bg-gradient-to-b from-primary/10 to-background text-foreground pt-24 sm:pt-28 md:pt-2">
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
          <Carousel
            items={carouselItems}
            autoPlay={true}
            autoPlayInterval={5000}
            className="max-w-2xl w-full"
          />
        </div>
      </div>
    </section>
  );
}

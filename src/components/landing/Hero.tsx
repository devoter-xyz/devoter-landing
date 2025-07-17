import { Zap } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-gradient-to-b from-primary/10 to-background text-foreground">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Text & CTAs */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          {/* Tagline Badge */}
          <div className="inline-block bg-primary/50 border border-secondary rounded-full px-4 py-1.5 mb-6">
            <p className="flex items-center text-sm font-bold justify-center md:justify-start">
              <Zap size={16} className="mr-2" />
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
            Through Community Voting in the ScoutGame Ecosystem
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 mb-8">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-secondary to-accent text-primary-foreground font-semibold shadow-lg hover:scale-105 transition-transform">
              Start Voting
            </button>
            <button className="px-6 py-3 rounded-full bg-accent/10 border border-accent text-accent-foreground font-semibold hover:bg-accent/20 transition-colors">
              View Demo
            </button>
          </div>
        </div>

        {/* Right: Dashboard */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <Image
            src="/dash.svg"
            alt="Dashboard preview"
            width={600}
            height={400}
            className="object-contain border rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

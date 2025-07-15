import { Shield, Users, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-foreground bg-background">
      <div className="absolute inset-0 -z-10 h-full w-full bg-transparent" />

      <div className="container mx-auto px-4 text-center">
        {/* Tagline Badge */}
        <div className="inline-block bg-secondary/70 border border-secondary text-secondary-foreground rounded-full px-4 py-1.5 mb-6">
          <p className="flex items-center text-sm font-light">
            <Zap size={16} className="mr-2 text-muted-foreground" />
            Web3 Repository Discovery Platform
          </p>
        </div>

        {/* Hero Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-foreground">
          Empowering Web3
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
            Repository Discovery
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Through Community Voting in the ScoutGame Ecosystem
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-secondary to-accent text-primary-foreground font-semibold shadow-lg hover:scale-105 transition-transform">
            Start Voting
          </button>
          <button className="px-6 py-3 rounded-full bg-accent/10 border border-accent text-accent-foreground font-semibold hover:bg-accent/20 transition-colors">
            View Demo
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: <Shield size={24} className="text-primary" />,
              label: "Non-Custodial",
              text: "Tokens stay in your wallet throughout the voting process",
              bg: "bg-primary/10",
            },
            {
              icon: <Users size={24} className="text-secondary" />,
              label: "DEV-Token",
              text: "Support for DEV tokens and participation",
              bg: "bg-secondary/10",
            },
            {
              icon: <Zap size={24} className="text-muted-foreground" />,
              label: "Weekly Cycles",
              text: "Regular engagement with fresh repository discoveries",
              bg: "bg-muted/10",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className={`bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 flex flex-col items-center
                hover:scale-[1.03] hover:border-accent hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] active:scale-[0.98]`}
            >
              <div className="h-20 bg-card rounded-xl flex items-center mb-6 p-4">
                <div className={`${card.bg} rounded-full p-3`}>
                  {card.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {card.label}
              </h3>
              <p className="text-muted-foreground text-center">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

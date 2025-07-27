import {
  BarChart,
  CodeXml,
  Database,
  RefreshCw,
  Shield,
  Zap,
} from "lucide-react";
import { GlassCard } from "../ui/glass-card";

const features = [
  {
    icon: <Shield size={32} />,
    title: "Non-Custodial Voting",
    description:
      "Your tokens remain secure in your wallet throughout the entire voting process. No custody risks, maximum security.",
    gradient: "from-primary to-accent",
  },
  {
    icon: <CodeXml size={32} />,
    title: "API Support",
    description:
      "Integrate seamlessly with our robust API to automate voting, fetch analytics, and build custom governance tools for your community.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: <RefreshCw size={32} />,
    title: "Weekly Cycles",
    description:
      "Fresh repository discoveries every week. Regular community engagement with continuous evolution.",
    gradient: "from-muted to-accent",
  },
  {
    icon: <BarChart size={32} />,
    title: "Real-Time Analytics",
    description:
      "Transparent decision tracking with live voting results, participation metrics, and community insights.",
    gradient: "from-primary to-muted",
  },
  {
    icon: <Zap size={32} />,
    title: "ScoutGame Integration",
    description:
      "Seamlessly connected to the ScoutGame ecosystem for enhanced repository discovery and developer recognition.",
    gradient: "from-accent to-secondary",
  },
  {
    icon: <Database size={32} />,
    title: "Decentralized Storage",
    description:
      "All voting data and repository metadata stored on IPFS for transparency and immutable record keeping.",
    gradient: "from-secondary to-muted",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="py-20 px-6 bg-accent/10 rounded-3xl text-foreground"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground mb-4">
            Platform Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Built for developers, by developers. Experience the future of
            repository discovery through community-driven voting.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature) => (
            <GlassCard
              key={feature.title}
              className="group relative overflow-hidden p-8 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
            >
              {/* Top Gradient Line */}
              <div className="absolute top-0 left-0 h-0 w-full bg-gradient-to-r from-primary via-accent to-muted transition-all duration-500 group-hover:h-1"></div>

              <div className="flex flex-col items-start">
                {/* Icon */}
                <div
                  className={`mb-6 rounded-lg p-3 text-white bg-gradient-to-br ${feature.gradient} transition-all duration-300 group-hover:scale-110`}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

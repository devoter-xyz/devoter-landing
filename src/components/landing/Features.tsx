import {
  Shield,
  RefreshCw,
  BarChart,
  Zap,
  Database,
  CodeXml,
} from 'lucide-react';
import React from 'react';
import { GlassCard } from '../ui/glass-card';

const features = [
  {
    icon: <Shield size={32} />,
    title: 'Non-Custodial Voting',
    description:
      'Your tokens remain secure in your wallet throughout the entire voting process. No custody risks, maximum security.',
    gradient: 'from-primary to-accent',
    delay: 200,
  },
  {
    icon: <CodeXml size={32} />,
    title: 'API Support',
    description:
      'Integrate seamlessly with our robust API to automate voting, fetch analytics, and build custom governance tools for your community.',
    gradient: 'from-secondary to-accent',
    delay: 400,
  },
  {
    icon: <RefreshCw size={32} />,
    title: 'Weekly Cycles',
    description:
      'Fresh repository discoveries every week. Regular community engagement with continuous evolution.',
    gradient: 'from-muted to-accent',
    delay: 600,
  },
  {
    icon: <BarChart size={32} />,
    title: 'Real-Time Analytics',
    description:
      'Transparent decision tracking with live voting results, participation metrics, and community insights.',
    gradient: 'from-primary to-muted',
    delay: 200,
  },
  {
    icon: <Zap size={32} />,
    title: 'ScoutGame Integration',
    description:
      'Seamlessly connected to the ScoutGame ecosystem for enhanced repository discovery and developer recognition.',
    gradient: 'from-accent to-secondary',
    delay: 400,
  },
  {
    icon: <Database size={32} />,
    title: 'Decentralized Storage',
    description:
      'All voting data and repository metadata stored on IPFS for transparency and immutable record keeping.',
    gradient: 'from-secondary to-muted',
    delay: 600,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-background text-foreground">
      <div className="container mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground mb-4">
            Platform Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Built for developers, by developers. Experience the future of repository discovery through community-driven governance.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <GlassCard
              key={index}
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

        {/* CTA Card */}
        <GlassCard className="p-8 md:p-12 bg-card border border-border text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Shape the Future?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of developers already using DeVoter to discover and promote innovative repositories.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="px-8 py-3 font-bold text-primary-foreground bg-gradient-to-r from-secondary to-accent rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              Start Voting Now
            </button>
            <button className="px-8 py-3 font-bold text-foreground bg-transparent border border-border rounded-lg hover:bg-muted/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default Features;

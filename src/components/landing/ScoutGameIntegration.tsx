import { Trophy, Users, Zap } from 'lucide-react';
import React from 'react';
import { GlassCard } from '../ui/glass-card';
import { GradientButton } from '../ui/gradient-button';

const benefits = [
  {
    icon: <Trophy size={28} />,
    title: 'Scout Points Integration',
    description:
      'Your DEVoter activity contributes to your ScoutGame profile, earning points for successful repository discoveries and community engagement.',
    gradient: 'from-primary to-accent',
  },
  {
    icon: <Users size={28} />,
    title: 'Developer Recognition',
    description:
      'Repositories that win DEVoter cycles receive enhanced visibility in ScoutGame, helping talented developers gain recognition.',
    gradient: 'from-secondary to-accent',
  },
  {
    icon: <Zap size={28} />,
    title: 'Cross-Platform Rewards',
    description:
      'Earn rewards across both platforms with unified tokenomics and shared achievement systems.',
    gradient: 'from-muted to-primary',
  },
];

const integrationSteps = [
  {
    number: 1,
    title: 'Vote on DEVoter',
    description: 'Discover and vote for repositories',
    gradient: 'bg-gradient-to-br from-primary to-accent',
  },
  {
    number: 2,
    title: 'Earn Scout Points',
    description: 'Build your reputation score',
    gradient: 'bg-gradient-to-br from-secondary to-accent',
  },
  {
    number: 3,
    title: 'Unlock Rewards',
    description: 'Access exclusive benefits',
    gradient: 'bg-gradient-to-br from-muted to-primary',
  },
];

const ScoutGameIntegration = () => {
  return (
    <section id="scoutgame" className="relative py-20 px-6 overflow-hidden bg-background text-foreground">
      {/* Floating background shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-0 w-1/3 h-1/2 bg-[--primary]/10 blur-3xl rounded-full" />
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-[--secondary]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-[--accent]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-0 w-1/3 h-1/2 bg-[--muted]/10 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold text-primary-foreground bg-secondary/70 border border-secondary/40 rounded-full">
            <Zap size={16} />
            ScoutGame Ecosystem
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground mb-4 py-1">
            Seamless Integration
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            DEVoter is deeply integrated with the ScoutGame ecosystem, creating a unified experience for developer discovery and recognition.
          </p>
        </div>

        {/* Benefits & Timeline */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Benefits List */}
          <div className="flex flex-col gap-6">
            {benefits.map((benefit, index) => (
              <GlassCard key={index} className="p-6 flex items-start gap-5 border border-border bg-card/80 hover:shadow-lg transition-shadow duration-300">
                <div className={`rounded-lg p-3 bg-gradient-to-br ${benefit.gradient} text-white`}>
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Integration Timeline */}
          <GlassCard className="p-8 h-full border border-border bg-card/80">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Unified Ecosystem
            </h3>
            <div className="relative flex flex-col items-start gap-20">
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-accent to-muted opacity-40" />
              {integrationSteps.map((step) => (
                <div key={step.number} className="flex items-center gap-5 w-full relative z-10">
                  <div
                    className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-xl ${step.gradient}`}
                  >
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* CTA */}
        <GlassCard className="mt-12 p-8 md:p-12 border border-border bg-card/80">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Join the ScoutGame Ecosystem?
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
              Connect your ScoutGame profile to DEVoter and start earning points while discovering amazing repositories.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <GradientButton>Connect ScoutGame</GradientButton>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default ScoutGameIntegration;

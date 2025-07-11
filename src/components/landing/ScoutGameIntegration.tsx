import { Trophy, Users, Zap } from 'lucide-react';
import React from 'react';
import { GlassCard } from '../ui/glass-card';
import { GradientButton } from '../ui/gradient-button';

const benefits = [
  {
    icon: <Trophy size={28} />,
    title: 'Scout Points Integration',
    description: 'Your DEVoter activity contributes to your ScoutGame profile, earning points for successful repository discoveries and community engagement.',
    gradient: 'from-green-400 to-teal-500',
  },
  {
    icon: <Users size={28} />,
    title: 'Developer Recognition',
    description: 'Repositories that win DEVoter cycles receive enhanced visibility in ScoutGame, helping talented developers gain recognition.',
    gradient: 'from-blue-400 to-cyan-500',
  },
  {
    icon: <Zap size={28} />,
    title: 'Cross-Platform Rewards',
    description: 'Earn rewards across both platforms with unified tokenomics and shared achievement systems.',
    gradient: 'from-purple-400 to-indigo-500',
  },
];

const integrationSteps = [
  {
    number: 1,
    title: 'Vote on DEVoter',
    description: 'Discover and vote for repositories',
    gradient: 'bg-gradient-to-br from-purple-500 to-indigo-600',
  },
  {
    number: 2,
    title: 'Earn Scout Points',
    description: 'Build your reputation score',
    gradient: 'bg-gradient-to-br from-cyan-400 to-blue-500',
  },
  {
    number: 3,
    title: 'Unlock Rewards',
    description: 'Access exclusive benefits',
    gradient: 'bg-gradient-to-br from-teal-400 to-green-500',
  },
];

const ScoutGameIntegration = () => {
  return (
    <section id="scoutgame" className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-green-500/20 blur-3xl rounded-full" />
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-1/3 h-1/2 bg-purple-500/10 blur-3xl rounded-full" />
      </div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold text-green-300 bg-green-900/50 border border-green-700 rounded-full">
            <Zap size={16} />
            ScoutGame Ecosystem
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300 mb-4">
            Seamless Integration
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            DEVoter is deeply integrated with the ScoutGame ecosystem, creating a unified experience for developer discovery and recognition.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-6">
            {benefits.map((benefit, index) => (
              <GlassCard key={index} className="p-6 flex items-start gap-5">
                <div className={`rounded-lg p-3 bg-gradient-to-br ${benefit.gradient} text-white`}>
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Unified Ecosystem</h3>
            <div className="relative flex flex-col items-start gap-4">
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-400 to-teal-400" />
              {integrationSteps.map((step) => (
                <div key={step.number} className="flex items-center gap-5 w-full">
                  <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-xl ${step.gradient} z-10`}>
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{step.title}</h4>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
        <GlassCard className="mt-12 p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join the ScoutGame Ecosystem?</h3>
            <p className="text-gray-400 max-w-3xl mx-auto mb-8">
              Connect your ScoutGame profile to DEVoter and start earning points while discovering amazing repositories.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <GradientButton>Connect ScoutGame</GradientButton>
              <GradientButton variant="secondary">Learn More</GradientButton>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  )
};

export default ScoutGameIntegration; 
import { Shield, RefreshCw, BarChart, Zap, Database, CodeXml } from 'lucide-react';
import React from 'react';
import { GlassCard } from '../ui/glass-card';

const features = [
  {
    icon: <Shield size={32} />,
    title: 'Non-Custodial Voting',
    description: 'Your tokens remain secure in your wallet throughout the entire voting process. No custody risks, maximum security.',
    gradient: 'from-purple-500 to-indigo-600',
    delay: 200,
  },
  {
    icon: <CodeXml size={32} />,
    title: 'API Support',
    description: 'Integrate seamlessly with our robust API to automate voting, fetch analytics, and build custom governance tools for your community.',
    gradient: 'from-blue-500 to-cyan-500',
    delay: 400,
  },
  {
    icon: <RefreshCw size={32} />,
    title: 'Weekly Cycles',
    description: 'Fresh repository discoveries every week. Regular community engagement with continuous evolution.',
    gradient: 'from-green-500 to-teal-500',
    delay: 600,
  },
  {
    icon: <BarChart size={32} />,
    title: 'Real-Time Analytics',
    description: 'Transparent decision tracking with live voting results, participation metrics, and community insights.',
    gradient: 'from-orange-500 to-amber-500',
    delay: 200,
  },
  {
    icon: <Zap size={32} />,
    title: 'ScoutGame Integration',
    description: 'Seamlessly connected to the ScoutGame ecosystem for enhanced repository discovery and developer recognition.',
    gradient: 'from-pink-500 to-rose-500',
    delay: 400,
  },
  {
    icon: <Database size={32} />,
    title: 'Decentralized Storage',
    description: 'All voting data and repository metadata stored on IPFS for transparency and immutable record keeping.',
    gradient: 'from-indigo-500 to-purple-600',
    delay: 600,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 mb-4">
            Platform Features
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Built for developers, by developers. Experience the future of repository discovery through community-driven governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <GlassCard
              key={index}
              className="group relative overflow-hidden p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${feature.delay}ms`, animation: 'fadeInUp 1s ease-out forwards' }}
            >
              <div className="absolute top-0 left-0 h-0 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-500 group-hover:h-1"></div>
              <div className="flex flex-col items-start">
                <div className={`mb-6 rounded-lg p-3 bg-gradient-to-br ${feature.gradient} text-white transition-all duration-300 group-hover:scale-110`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-purple-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Shape the Future?</h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Join thousands of developers already using DeVoter to discover and promote innovative repositories.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="px-8 py-3 font-bold text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                Start Voting Now
              </button>
              <button className="px-8 py-3 font-bold text-white bg-transparent border-2 border-white/50 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white">
                Learn More
              </button>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default Features;

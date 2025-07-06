import { Shield, Users, Zap } from "lucide-react";
import { CustomCard } from "../common/CustomCard";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 -z-10 h-full w-full bg-transparent" />
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block bg-gray-800/50 border border-gray-700 rounded-full px-4 py-1.5 mb-6">
          <p className="flex items-center text-sm font-light">
            <Zap size={16} className="mr-2 text-yellow-400" />
            Web3 Repository Discovery Platform
          </p>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
          Empowering Web3
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Repository Discovery
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Through Community Voting in the ScoutGame Ecosystem
        </p>

        <div className="flex justify-center items-center gap-4 mb-16">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform">
            Start Voting
          </button>
          <button className="px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-400 text-cyan-300 font-semibold hover:bg-cyan-500/20 transition-colors">
            View Demo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-[#1a1f2e]/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col items-center">
            <div className="h-20 bg-[#1a1f2e] rounded-xl flex items-center mb-6 p-4">
              <div className="bg-purple-500/10 rounded-full p-3">
                <Shield size={24} className="text-purple-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Non-Custodial</h3>
            <p className="text-gray-400">Tokens stay in your wallet throughout the voting process</p>
          </div>
          
          <div className="bg-[#1a1f2e]/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col items-center">
            <div className="h-20 bg-[#1a1f2e] rounded-xl flex items-center mb-6 p-4">
              <div className="bg-cyan-500/10 rounded-full p-3">
                <Users size={24} className="text-cyan-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">DEV-Token</h3>
            <p className="text-gray-400">Support for DEV tokens and participation</p>
          </div>
          
          <div className="bg-[#1a1f2e]/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col items-center">
            <div className="h-20 bg-[#1a1f2e] rounded-xl flex items-center mb-6 p-4">
              <div className="bg-green-500/10 rounded-full p-3">
                <Zap size={24} className="text-green-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Weekly Cycles</h3>
            <p className="text-gray-400">Regular engagement with fresh repository discoveries</p>
          </div>
        </div>
      </div>
    </section>
  );
} 
import Navbar from "@/components/Navbar";
import ParticleSystem from "@/components/ParticleSystem";
import Hero from "@/components/landing/Hero";
import Features from '@/components/landing/Features';
import Workflow from "@/components/landing/Workflow";
import ScoutGameIntegration from "@/components/landing/ScoutGameIntegration";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0C14] text-white">
      <ParticleSystem />
      <Navbar />
      <Hero />
      <Features />
      <ScoutGameIntegration />
      <Workflow />
    </main>
  );
}

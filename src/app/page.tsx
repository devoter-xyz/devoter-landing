import Navbar from "@/components/Navbar";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Workflow from "@/components/landing/Workflow";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Workflow />
      <Footer />
    </main>
  );
}

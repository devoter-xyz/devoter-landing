"use client";

import { GlassCard, GlassCardContent } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { BarChart3, LucideIcon, Trophy, Vote, Wallet } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type WorkflowStep = {
  id: number;
  title: string;
  description: string;
  details: string;
  icon: LucideIcon;
  gradient: string;
};

const workflowSteps: WorkflowStep[] = [
  {
    id: 1,
    title: "Connect Wallet",
    description: "Link your wallet to start voting.",
    details:
      "Securely connect with MetaMask, WalletConnect, or other supported wallets to manage your voting power.",
    icon: Wallet,
    gradient: "gradient-connect",
  },
  {
    id: 2,
    title: "Cast Your Vote",
    description: "Browse repositories and cast your vote on issues.",
    details:
      "Use your voting power to influence the development direction of your favorite open-source projects.",
    icon: Vote,
    gradient: "gradient-purple-blue",
  },
  {
    id: 3,
    title: "Weekly Results",
    description: "Get weekly results of the votes.",
    details:
      "Check the results of the votes on a weekly basis and see the impact of your contributions.",
    icon: Trophy,
    gradient: "gradient-results",
  },
  {
    id: 4,
    title: "Track Impact",
    description: "Monitor your influence and rewards.",
    details:
      "An analytics dashboard helps you track your voting power, rank, and success rate over time.",
    icon: BarChart3,
    gradient: "gradient-impact",
  },
];

const Workflow = () => {
  const [activeStep, setActiveStep] = useState(1);

  const renderMockup = () => {
    const step = workflowSteps.find((s) => s.id === activeStep);
    if (!step) return null;
    const Icon = step.icon;

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={step.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "relative aspect-video rounded-xl p-6 flex flex-col items-center justify-center",
            step.gradient
          )}
          style={{
            backgroundSize: "400% 400%",
            animation: "gradient 5s ease infinite",
          }}
        >
          <Icon className="w-16 h-16 text-white mb-4" />
          <h3 className="text-2xl font-bold text-white">{step.title}</h3>
          <p className="mt-2 text-white/90 text-center">{step.description}</p>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <section id="workflow" className="py-20 sm:py-32 text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, four-step process to make your voice heard in open-source
            development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Step List */}
          <div className="flex flex-col gap-4">
            {workflowSteps.map((step, index) => {
              const isActive = activeStep === step.id;
              return (
                <GlassCard
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={cn(
                    "cursor-pointer transition-all duration-300",
                    isActive
                      ? ["border-accent", step.gradient]
                      : "hover:bg-muted/10"
                  )}
                  style={
                    isActive
                      ? {
                          backgroundSize: "400% 400%",
                          animation: "gradient 5s ease infinite",
                        }
                      : {}
                  }
                >
                  <GlassCardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center",
                          isActive ? "bg-white/20" : step.gradient
                        )}
                      >
                        <step.icon
                          className={cn(
                            "w-5 h-5",
                            isActive ? "text-white" : "text-white"
                          )}
                        />
                      </div>
                      <div>
                        <p
                          className={cn(
                            "font-semibold mb-1",
                            isActive ? "text-white/80" : "text-muted-foreground"
                          )}
                        >
                          Step {index + 1}
                        </p>
                        <h3
                          className={cn(
                            "text-lg font-bold",
                            isActive ? "text-white" : "text-muted-foreground"
                          )}
                        >
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  </GlassCardContent>
                </GlassCard>
              );
            })}
          </div>

          {/* Step Preview */}
          <div className="sticky top-24">{renderMockup()}</div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-32">
          <GlassCard className="p-8 md:p-12 bg-card border border-border text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Shape the Future?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of developers already using DeVoter to discover and
              promote innovative repositories.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="#features"
                className="px-8 py-3 font-bold text-primary-foreground bg-gradient-to-r from-secondary to-accent rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              >
                Start Voting Now
              </Link>
              <Link
                href="#features"
                className="px-8 py-3 font-bold text-foreground bg-transparent border border-border rounded-lg hover:bg-muted/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Workflow;

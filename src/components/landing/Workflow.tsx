"use client";

import {
  GlassCard,
  GlassCardContent
} from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BarChart3, LucideIcon, Trophy, Vote, Wallet } from "lucide-react";
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
    gradient: "from-primary to-accent",
  },
  {
    id: 2,
    title: "Cast Your Vote",
    description: "Browse repositories and cast your vote on issues.",
    details:
      "Use your voting power to influence the development direction of your favorite open-source projects.",
    icon: Vote,
    gradient: "from-secondary to-accent",
  },
  {
    id: 3,
    title: "Weekly Results",
    description: "Get weekly results of the votes.",
    details:
      "Check the results of the votes on a weekly basis and see the impact of your contributions.",
    icon: Trophy,
    gradient: "from-muted to-secondary",
  },
  {
    id: 4,
    title: "Track Impact",
    description: "Monitor your influence and rewards.",
    details:
      "An analytics dashboard helps you track your voting power, rank, and success rate over time.",
    icon: BarChart3,
    gradient: "from-primary to-muted",
  },
];

const Workflow = () => {
  const [activeStep, setActiveStep] = useState(1);

  const renderMockup = () => {
    const step = workflowSteps.find((s) => s.id === activeStep);
    if (!step) return null;

    const Icon = step.icon;

    return (
      <div className="relative aspect-video rounded-xl bg-card/70 backdrop-blur-sm p-4 md:p-6 border border-border">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <Icon className="w-16 h-16 mx-auto text-foreground mb-4" />
            <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
            <p className="text-muted-foreground mt-2">{step.description}</p>
          </div>
        </div>

        {/* Floating Gradient Bubbles */}
        <div className={cn("absolute top-2 left-2 w-8 h-8 rounded-full opacity-40 blur-sm", "bg-gradient-to-br", step.gradient)}></div>
        <div className={cn("absolute bottom-2 right-2 w-8 h-8 rounded-full opacity-40 blur-sm", "bg-gradient-to-br", step.gradient)}></div>
      </div>
    );
  };

  return (
    <section id="workflow" className="py-20 sm:py-32 text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
            <span className="">
              How It Works
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, four-step process to make your voice heard in open-source development.
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
                    "cursor-pointer transition-all duration-300 group",
                    isActive ? "bg-card border-accent" : "hover:bg-muted/10"
                  )}
                >
                  <GlassCardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Step Icon */}
                      <div
                        className={cn(
                          "flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300",
                          "bg-gradient-to-br",
                          step.gradient,
                          isActive ? "scale-110" : "group-hover:scale-105"
                        )}
                      >
                        <step.icon className="w-6 h-6 text-primary-foreground" />
                      </div>

                      {/* Step Content */}
                      <div className="flex-grow">
                        <p className={cn("font-semibold mb-1", isActive ? "text-foreground" : "text-muted-foreground")}>
                          Step {index + 1}
                        </p>
                        <h3 className={cn("text-xl font-bold", isActive ? "text-foreground" : "text-muted-foreground")}>
                          {step.title}
                        </h3>
                        <p className={cn("text-sm mt-1", isActive ? "text-muted-foreground" : "text-muted-foreground/80")}>
                          {step.description}
                        </p>

                        {/* Expandable Details */}
                        <motion.div
                          initial={false}
                          animate={{
                            height: isActive ? "auto" : 0,
                            opacity: isActive ? 1 : 0,
                            marginTop: isActive ? "0.75rem" : 0,
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-muted-foreground">{step.details}</p>
                        </motion.div>
                      </div>
                    </div>
                  </GlassCardContent>
                </GlassCard>
              );
            })}
          </div>

          {/* Step Preview */}
          <div className="sticky top-24">
            <GlassCard>
              <GlassCardContent className="p-2">{renderMockup()}</GlassCardContent>
            </GlassCard>
          </div>
        </div>
        <div className="mt-32">
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
      </div>
    </section>
  );
};

export default Workflow;

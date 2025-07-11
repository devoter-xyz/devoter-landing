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
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    id: 2,
    title: "Cast Your Vote",
    description: "Browse repositories and cast your vote on issues.",
    details:
      "Use your voting power to influence the development direction of your favorite open-source projects.",
    icon: Vote,
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Weekly Results",
    description: "Get weekly results of the votes.",
    details:
      "Check the results of the votes on a weekly basis and see the impact of your contributions.",
    icon: Trophy,
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    id: 4,
    title: "Track Impact",
    description: "Monitor your influence and rewards.",
    details:
      "An analytics dashboard helps you track your voting power, rank, and success rate over time.",
    icon: BarChart3,
    gradient: "from-emerald-500 to-green-500",
  },
];

const Workflow = () => {
  const [activeStep, setActiveStep] = useState(1);

  const renderMockup = () => {
    const step = workflowSteps.find((s) => s.id === activeStep);
    if (!step) return null;

    const Icon = step.icon;

    return (
      <div className="relative aspect-video rounded-xl bg-gray-900/70 backdrop-blur-sm p-4 md:p-6">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <Icon className="w-16 h-16 mx-auto text-white mb-4" />
            <h3 className="text-xl font-bold text-white">{step.title}</h3>
            <p className="text-white/60 mt-2">{step.description}</p>
          </div>
        </div>
        <div
          className={cn(
            "absolute top-2 left-2 w-8 h-8 rounded-full opacity-50 animate-pulse",
            step.gradient
          )}
        ></div>
        <div
          className={cn(
            "absolute bottom-2 right-2 w-8 h-8 rounded-full opacity-50 animate-pulse",
            step.gradient
          )}
        ></div>
      </div>
    );
  };

  return (
    <section id="workflow" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            <span className="bg-gradient-to-r from-purple-500 to-sky-500 text-transparent bg-clip-text">
              How It Works
            </span>
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            A simple, four-step process to make your voice heard in open-source
            development.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="flex flex-col gap-4">
            {workflowSteps.map((step, index) => {
              const isActive = activeStep === step.id;
              return (
                <GlassCard
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={cn(
                    "cursor-pointer transition-all duration-300 group",
                    isActive
                      ? "bg-white/10 border-white/20"
                      : "hover:bg-white/10"
                  )}
                >
                  <GlassCardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={cn(
                          "flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300",
                          "bg-gradient-to-br",
                          step.gradient,
                          isActive ? "scale-110" : "group-hover:scale-105"
                        )}
                      >
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-grow">
                        <p
                          className={cn(
                            "font-semibold mb-1",
                            isActive ? "text-white" : "text-white/80"
                          )}
                        >
                          Step {index + 1}
                        </p>
                        <h3
                          className={cn(
                            "text-xl font-bold",
                            isActive ? "text-white" : "text-white/80"
                          )}
                        >
                          {step.title}
                        </h3>
                        <p
                          className={cn(
                            "text-sm mt-1",
                            isActive ? "text-white/70" : "text-white/60"
                          )}
                        >
                          {step.description}
                        </p>
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
                          <p className="text-sm text-white/60">
                            {step.details}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </GlassCardContent>
                </GlassCard>
              );
            })}
          </div>
          <div className="sticky top-24">
            <GlassCard>
              <GlassCardContent className="p-2">
                {renderMockup()}
              </GlassCardContent>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;

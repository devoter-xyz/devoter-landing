"use client";

import { GlassCard, GlassCardContent } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { workflowSteps } from "@/lib/workflowData";
import Link from "next/link";
import { useId, useState, type KeyboardEvent } from 'react';



const Workflow = () => {
  const [activeStep, setActiveStep] = useState(1);

  const uid = useId();

  const onTabListKeyDown = (e: KeyboardEvent) => {
    const idx = workflowSteps.findIndex((s) => s.id === activeStep)
    if (idx < 0) return
    const last = workflowSteps.length - 1
    const go = (i: number) => {
      const id = workflowSteps[i].id
      setActiveStep(id)
      queueMicrotask(() =>
        document.getElementById(`workflow-${uid}-step-${id}-tab`)?.focus()
      )
    }
    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault(); go((idx + 1) % workflowSteps.length); break
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault(); go((idx - 1 + workflowSteps.length) % workflowSteps.length); break
      case 'Home':
        e.preventDefault(); go(0); break
      case 'End':
        e.preventDefault(); go(last); break
      case 'PageDown':
        e.preventDefault(); go((idx + 1) % workflowSteps.length); break
      case 'PageUp':
        e.preventDefault(); go((idx - 1 + workflowSteps.length) % workflowSteps.length); break
    }
  }

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
    <section id="workflow" className="py-20 sm:py-32 text-foreground" aria-labelledby="workflow-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 id="workflow-heading" className="text-3xl md:text-5xl font-bold tracking-tighter">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, four-step process to make your voice heard in open-source
            development.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Step List */}
          <nav aria-label="Workflow steps" role="tablist" aria-orientation="vertical" onKeyDown={onTabListKeyDown} className="flex flex-col gap-4">
            {workflowSteps.map((step, index) => {
              const isActive = activeStep === step.id;
              return (
                <GlassCard
                  key={step.id}
                  className={cn(
                    "h-full w-full text-left focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-xl",
                    "transition-all duration-300",
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
                  <div
                    id={`workflow-${uid}-step-${step.id}-tab`}
                    role="tab"
                    tabIndex={isActive ? 0 : -1}
                    aria-selected={isActive}
                    aria-labelledby={`workflow-${uid}-step-${step.id}-label workflow-${uid}-step-${step.id}-title`}
                    aria-controls={`workflow-${uid}-step-panel`}
                    onClick={() => {
                      setActiveStep(step.id);
                      queueMicrotask(() =>
                        document.getElementById(`workflow-${uid}-step-${step.id}-tab`)?.focus()
                      );
                    }}
                    onKeyDown={(e: KeyboardEvent) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveStep(step.id);
                        queueMicrotask(() =>
                          document.getElementById(`workflow-${uid}-step-${step.id}-tab`)?.focus()
                        );
                      }
                    }}
                    className="cursor-pointer p-6"
                  >
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
                          id={`workflow-${uid}-step-${step.id}-label`}
                          className={cn(
                            "font-semibold mb-1",
                            isActive ? "text-white/80" : "text-muted-foreground"
                          )}
                        >
                          Step {index + 1}
                        </p>
                        <h3
                          id={`workflow-${uid}-step-${step.id}-title`}
                          className={cn(
                            "text-lg font-bold",
                            isActive ? "text-white" : "text-muted-foreground"
                          )}
                        >
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </nav>

          {/* Step Preview */}
          <div
            id={`workflow-${uid}-step-panel`}
            role="tabpanel"
            aria-labelledby={`workflow-${uid}-step-${activeStep}-tab`}
            className="sticky top-24"
          >
            {renderMockup()}
          </div>
        </div>

        {/* Bottom CTA */}
        <footer className="mt-32">
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
                className="px-8 py-3 font-bold text-foreground bg-transparent border border-border rounded-lg hover:bg-muted/10 hover:scale-105 duration-300"
              >
                Learn More
              </Link>
            </div>
          </GlassCard>
        </footer>
      </div>
    </section>
  );
};

export default Workflow;

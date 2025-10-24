import { GlassCard } from "../ui/glass-card";
import { features } from "../../lib/featuresData";
import type { Feature } from "../../lib/featuresData";
import { Icon } from "../ui/Icon";

const Features = () => {
  return (
    <section
      id="features"
      className="py-24 px-4 bg-gradient-to-br from-accent/20 via-background to-primary/10 rounded-[2.5rem] text-foreground shadow-2xl border border-accent/30"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <header className="text-center mb-20">
          <h2
            id="features-heading"
            className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-primary to-accent drop-shadow-lg mb-6"
          >
            Why Choose Devoter?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover a new era of open-source governance. Our platform empowers communities with secure, transparent, and developer-centric voting.
          </p>
        </header>

        {/* Feature Cards Grid - Redesigned */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature: Feature) => {
            const IconName = feature.icon;
            return (
              <GlassCard
                key={feature.title}
                className="group relative flex flex-col items-center justify-between h-full p-10 bg-background/80 border border-accent/20 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                aria-labelledby={`feature-${feature.title.replace(/\s+/g, "-").toLowerCase()}-title`}
              >
                {/* Animated Gradient Ring */}
                <div className="relative mb-7">
                  <span
                    className={`absolute inset-0 rounded-full blur-md opacity-60 animate-pulse bg-gradient-to-br ${feature.gradient}`}
                    style={{ zIndex: 0 }}
                  ></span>
                  <span className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-background border-2 border-accent shadow-md">
                    <Icon name={IconName} size={32} />
                  </span>
                </div>
                <h3
                  id={`feature-${feature.title.replace(/\s+/g, "-").toLowerCase()}-title`}
                  className="text-2xl font-bold text-foreground mb-4 text-center group-hover:text-accent transition-colors duration-300"
                >
                  {feature.title}
                </h3>
                <p className="text-base text-muted-foreground text-center group-hover:text-foreground transition-colors duration-300">
                  {feature.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

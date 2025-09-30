import { LucideIcon, BarChart, CodeXml, Database, RefreshCw, Shield, Zap } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export const features: Feature[] = [
  {
    icon: Shield,
    title: "Non-Custodial Voting",
    description:
      "Your tokens remain secure in your wallet throughout the entire voting process. No custody risks, maximum security.",
    gradient: "from-primary to-accent",
  },
  {
    icon: CodeXml,
    title: "API Support",
    description:
      "Integrate seamlessly with our robust API to automate voting, fetch analytics, and build custom governance tools for your community.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: RefreshCw,
    title: "Weekly Cycles",
    description:
      "Fresh repository discoveries every week. Regular community engagement with continuous evolution.",
    gradient: "from-muted to-accent",
  },
  {
    icon: BarChart,
    title: "Real-Time Analytics",
    description:
      "Transparent decision tracking with live voting results, participation metrics, and community insights.",
    gradient: "from-primary to-muted",
  },
  {
    icon: Zap,
    title: "ScoutGame Integration",
    description:
      "Seamlessly connected to the ScoutGame ecosystem for enhanced repository discovery and developer recognition.",
    gradient: "from-accent to-secondary",
  },
  {
    icon: Database,
    title: "Decentralized Storage",
    description:
      "All voting data and repository metadata stored on IPFS for transparency and immutable record keeping.",
    gradient: "from-secondary to-muted",
  },
];
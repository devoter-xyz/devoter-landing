import { BarChart3, LucideIcon, Trophy, Vote, Wallet } from "lucide-react";

export type WorkflowStep = {
  id: number;
  title: string;
  description: string;
  details: string;
  icon: LucideIcon;
  gradient: string;
};

export const workflowSteps: WorkflowStep[] = [
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

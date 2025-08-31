// Changelog data for Devoter platform

export interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  description: string;
  type: "feature" | "improvement" | "bugfix" | "breaking";
  changes: {
    type: "added" | "changed" | "fixed" | "removed" | "improved";
    description: string;
  }[];
}

export const changelogData: ChangelogEntry[] = [
  {
    version: "0.0.1",
    date: "2025-06-04",
    title: "Initial Project & Database Setup",
    description: "Initialized the project with Next.js, Tailwind, ESLint, and configured Prisma with PostgreSQL.",
    type: "feature",
    changes: [
      { type: "added", description: "Initialize project with Next.js, Tailwind CSS, and ESLint configuration (Jun 2)" },
      { type: "added", description: "Configure Prisma with PostgreSQL schema (Jun 4)" },
    ],
  },
  {
    version: "0.0.2",
    date: "2025-06-20",
    title: "Repository Submission & Wallet Authentication",
    description: "Added repository submission UI and integration, submission limits, and RainbowKit wallet authentication.",
    type: "feature",
    changes: [
      { type: "added", description: "Build Repository Submission Form UI (Jun 13)" },
      { type: "added", description: "Implement RainbowKit Wallet Authentication (Jun 16)" },
      { type: "added", description: "Integrated Repository Submission with the frontend (Jun 20)" },
      { type: "added", description: "Implemented repository submission limit by user (Jun 22)" },
    ],
  },
  {
    version: "0.0.3",
    date: "2025-06-30",
    title: "Payments & Leaderboard",
    description: "Implemented payments for repository submissions, leaderboard system, and fixed seeder scripts.",
    type: "feature",
    changes: [
      { type: "added", description: "Implements Payment for Repository Submissions (Jun 26)" },
      { type: "fixed", description: "Fix Payment handling edge cases (Jun 28)" },
      { type: "added", description: "Generate Seed Data for Payments and Repositories (Jun 28)" },
      { type: "added", description: "Repository Leaderboard Implementation (Jun 30)" },
      { type: "fixed", description: "Fixed and updated the seeder script (Jul 3)" },
    ],
  },
  {
    version: "0.0.4",
    date: "2025-07-16",
    title: "Voting System & Wallet Fixes",
    description: "Introduced voting mechanism with voting power logic, pagination, SSR improvements, and wallet fixes.",
    type: "improvement",
    changes: [
      { type: "added", description: "Added pagination for the weekly leaderboard (Jul 5)" },
      { type: "fixed", description: "SSR for data fetching (Jul 5)" },
      { type: "added", description: "Implemented Basic Voting Mechanism (Jul 12)" },
      { type: "added", description: "Determine user's voting power to allow voting a repository (Jul 12)" },
      { type: "fixed", description: "Fixed voting token amount and schema changes (Jul 13)" },
      { type: "fixed", description: "Wallet failing to connect issue (Jul 14)" },
      { type: "added", description: "Added user's token balance check action (Jul 14)" },
      { type: "added", description: "Charging the user 0.25% of their Voting power to cast a vote (Jul 16)" },
    ],
  },
  {
    version: "0.0.5",
    date: "2025-07-30",
    title: "Repository Summary & UI Enhancements",
    description: "Improved UI, added repository summaries, updated app logo, and refined layout components.",
    type: "improvement",
    changes: [
      { type: "added", description: "Added Repository Summary Component (Jul 30)" },
      { type: "fixed", description: "Fixed app logo display (Jul 30)" },
      { type: "changed", description: "Refactored Card rendering logic (Jul 30)" },
      { type: "changed", description: "Updated app logo (Jul 30)" },
      { type: "changed", description: "Adjust layout and sidebar positioning (Jul 30)" },
      { type: "added", description: "Added Top Repositories Section (Jul 30)" },
      { type: "changed", description: "Refactored cards component (Jul 30)" },
      { type: "changed", description: "Refactored and fixed the layout (Jul 30)" },
    ],
  },
  {
    version: "0.0.6",
    date: "2025-08-17",
    title: "Discussions, Social Links & Seed Data Enhancements",
    description: "Introduced discussions with replies and voting, repository social links, seed likes, and model enhancements.",
    type: "feature",
    changes: [
      { type: "added", description: "Feat/ Fetching repo details from db instead of mock data (Aug 30)" },
      { type: "changed", description: "Improved styling for repository cards (Aug 24)" },
      { type: "added", description: "Feat/ API Schema (Aug 21)" },
      { type: "added", description: "Feat/ Fetch and display top voted repositories with loading state in HomePage (Aug 19)" },
      { type: "added", description: "Feat/Repo Database Functions (Aug 19)" },
      { type: "fixed", description: "Fix/repo-page (Aug 19)" },
      { type: "added", description: "Refactored the repository discussion page (Aug 17)" },
      { type: "added", description: "Feat/seed likes (Aug 17)" },
      { type: "added", description: "Add social links generation for repositories in seed data (Aug 17)" },
      { type: "added", description: "Add reply generation logic to seeding process and update seeder for discussions (Aug 16)" },
      { type: "added", description: "Add discussion generation logic and update seeding process for discussions (Aug 16)" },
      { type: "added", description: "Enhance User and Repository models with discussions, social links, and additional properties (Aug 16)" },
      { type: "added", description: "Add discussion section with voting and replies to DemoRepositoryPage (Aug 14)" },
      { type: "changed", description: "Back to home navigation improvement (Aug 15)" },
      { type: "added", description: "Leader board demo (Aug 13)" },
    ],
  },
];

"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  ChevronRight,
  GitCommit,
  Sparkles,
  Bug,
  Zap,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { changelogData, ChangelogEntry } from "@/lib/changelogData";

const getTypeIcon = (type: ChangelogEntry["type"]) => {
  switch (type) {
    case "feature":
      return <Sparkles className="w-5 h-5 text-primary" />;
    case "improvement":
      return <Zap className="w-5 h-5 text-secondary" />;
    case "bugfix":
      return <Bug className="w-5 h-5 text-accent" />;
    case "breaking":
      return <GitCommit className="w-5 h-5 text-destructive" />;
  }
};

const getChangeTypeColor = (type: string) => {
  switch (type) {
    case "added":
      return "text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/20";
    case "improved":
    case "changed":
      return "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20";
    case "fixed":
      return "text-orange-600 bg-orange-50 dark:text-orange-400 dark:bg-orange-900/20";
    case "removed":
      return "text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-900/20";
    default:
      return "text-muted-foreground bg-muted";
  }
};


export default function ChangelogContent() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-primary/5 to-background pt-24 sm:pt-28 md:pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
            <p className="flex items-center text-sm font-semibold justify-center">
              <GitCommit size={16} className="mr-2" />
              Product Updates
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
            Changelog
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest features, improvements, and bug fixes
            in Devoter.
          </p>
        </motion.div>

        {/* Changelog Entries */}
        <div className="space-y-8">
          {changelogData.map((entry: ChangelogEntry, index) => (
            <motion.div
              key={entry.version}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 border-l-4 border-l-primary/50 hover:border-l-primary transition-colors">
                {/* Entry Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div className="flex items-center gap-3 mb-2 sm:mb-0">
                    {getTypeIcon(entry.type)}
                    <div>
                      <h2 className="text-xl font-semibold flex items-center gap-2">
                        {entry.version}
                        <span className="text-sm font-normal text-muted-foreground">
                          - {entry.title}
                        </span>
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar size={14} className="mr-1" />
                    {entry.date}
                  </div>
                </div>

                {/* Entry Description */}
                <p className="text-muted-foreground mb-4">
                  {entry.description}
                </p>

                {/* Changes List */}
                <div className="space-y-2">
                  {entry.changes.map((change: ChangelogEntry['changes'][number], changeIndex) => (
                    <div key={changeIndex} className="flex items-start gap-3">
                      <ChevronRight
                        size={16}
                        className="mt-0.5 text-muted-foreground flex-shrink-0"
                      />
                      <div className="flex-1">
                        <span
                          className={`inline-block px-2 py-1 rounded text-xs font-medium mr-2 ${getChangeTypeColor(
                            change.type
                          )}`}
                        >
                          {change.type.charAt(0).toUpperCase() +
                            change.type.slice(1)}
                        </span>
                        <span className="text-sm">{change.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
        >
          <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
          <p className="text-muted-foreground mb-4">
            Follow our development progress and get notified about new releases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/devoter-xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-secondary to-accent text-primary-foreground font-semibold shadow-lg hover:scale-105 duration-300 transition-transform"
            >
              Follow on GitHub
            </a>
            <a
              href="https://x.com/devoterxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-accent/10 border border-accent text-accent-foreground font-semibold hover:bg-accent/20 hover:scale-105 duration-300"
            >
              Follow on X
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

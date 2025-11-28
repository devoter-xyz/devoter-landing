"use client";

import { motion } from "framer-motion";
import { Shield, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function PrivacyPolicyContent() {
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
              <Shield size={16} className="mr-2" />
              Legal Document
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
            Privacy Policy
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            How we collect, use, and protect your information
          </p>

          <div className="flex items-center justify-center text-sm text-muted-foreground">
            <Calendar size={14} className="mr-1" />
            Last updated: August 23, 2025
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <Card className="p-8">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  Information We Collect
                </h2>
                <p className="text-muted-foreground mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum
                  </li>
                  <li>
                    Excepteur sint occaecat cupidatat non proident sunt in culpa
                  </li>
                  <li>
                    Qui officia deserunt mollit anim id est laborum sed ut
                    perspiciatis
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground mb-6">
                  Unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae vitae
                  dicta sunt explicabo.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  Data Sharing and Disclosure
                </h2>
                <p className="text-muted-foreground mb-6">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet consectetur adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Important:</strong> Ut enim ad minima veniam quis
                    nostrum exercitationem ullam corporis suscipit laboriosam
                    nisi ut aliquid ex ea commodi consequatur.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  Your Rights and Choices
                </h2>
                <p className="text-muted-foreground mb-6">
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam nihil molestiae consequatur vel illum qui
                  dolorem eum fugiat quo voluptas nulla pariatur.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                  </li>
                  <li>
                    Qui blanditiis praesentium voluptatum deleniti atque
                    corrupti
                  </li>
                  <li>
                    Quos dolores et quas molestias excepturi sint occaecati
                    cupiditate
                  </li>
                  <li>
                    Non provident similique sunt in culpa qui officia deserunt
                  </li>
                </ul>
              </section>

              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground mb-6">
                  Omnis voluptas assumenda est omnis dolor repellendus
                  temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae sint
                  et molestiae non recusandae.
                </p>
                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm">
                    <strong>Email:</strong> privacy@devoter.xyz
                    <br />
                    <strong>Address:</strong> 123 Lorem Ipsum Street, Dolor Sit,
                    Amet 12345
                  </p>
                </div>
              </section>

              </section>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

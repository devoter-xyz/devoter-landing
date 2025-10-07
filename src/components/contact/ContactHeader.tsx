"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function ContactHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <div className="inline-block bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
        <p className="flex items-center text-sm font-semibold justify-center">
          <MessageCircle size={16} className="mr-2" />
          Get In Touch
        </p>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
        Contact Us
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
        We&apos;d love to hear from you. Send us a message and we&apos;ll
        respond as soon as possible.
      </p>
    </motion.div>
  );
}

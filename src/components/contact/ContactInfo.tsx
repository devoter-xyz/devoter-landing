"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <p className="text-muted-foreground mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam quis nostrud.
        </p>
      </div>

      {/* Warning: Demo Data */}
      <div className="mb-4 p-4 bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 rounded">
        <strong>Note:</strong> The contact information below is for
        demonstration purposes only and does not represent real contact
        details.
      </div>
      <div className="space-y-6">
        {/* Email */}
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Email Address</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Send us an email anytime
              </p>
              <a
                href="mailto:support@devoter.xyz"
                className="text-primary hover:text-primary/80 font-medium"
              >
                support@devoter.xyz
              </a>
            </div>
          </div>
        </Card>

        {/* Phone */}
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-secondary/10 p-3 rounded-lg">
              <Phone className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Phone Number</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Call us during business hours
              </p>
              <p className="font-medium">+1 (555) 123-4567</p>
            </div>
          </div>
        </Card>

        {/* Address */}
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-accent/10 p-3 rounded-lg">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Office Address</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Visit us at our headquarters
              </p>
              <p className="font-medium">
                123 Lorem Ipsum Street
                <br />
                Dolor Sit, Amet 12345
                <br />
                United States
              </p>
            </div>
          </div>
        </Card>

        {/* Business Hours */}
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-muted/20 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Business Hours</h3>
              <p className="text-muted-foreground text-sm mb-2">
                When you can reach us
              </p>
              <div className="space-y-1 text-sm">
                <p>
                  <span className="font-medium">Monday - Friday:</span> 9:00 AM
                  - 6:00 PM PST
                </p>
                <p>
                  <span className="font-medium">Saturday:</span> 10:00 AM -
                  4:00 PM PST
                </p>
                <p>
                  <span className="font-medium">Sunday:</span> Closed
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
}

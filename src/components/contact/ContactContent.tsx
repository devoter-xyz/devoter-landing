"use client";

import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";
import { ContactForm } from "./ContactForm";

export default function ContactContent() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-primary/5 to-background pt-24 sm:pt-28 md:pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <ContactHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
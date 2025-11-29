

import { Github, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "../../lib/footerLinks";

/**
 * Footer component for the Devoter landing page.
 *
 * Sections:
 * 1. Brand Section: Shows logo and brand message.
 * 2. Links Section: Product, Company, and Social navigation links.
 * 3. Bottom Strip: Copyright and legal/social links.
 *
 * All links and icons have enhanced hover/active effects for a professional look.
 */

const Footer = () => {
  return (
    <footer className="py-16 bg-accent/10 border-t border-accent/20" aria-labelledby="footer-heading">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section: Logo and brand message */}
          <section className="space-y-6" aria-labelledby="footer-brand-heading">
            <div className="flex items-center space-x-2">
              {/* Devoter logo */}
              <Image
                src="/logo_text.svg"
                alt="Devoter Logo"
                width={40}
                height={40}
                className="w-40 drop-shadow-lg"
              />
            </div>
            <h2 id="footer-brand-heading" className="sr-only">
              Devoter Brand
            </h2>
            {/* Brand message */}
            <p className="text-lg md:text-xl font-medium text-gray-700 max-w-xs">
              Empowering Web3 Communities and Projects Through Token-Weighted Voting
            </p>
          </section>

          {/* Links Section: Product, Company, Socials */}
          <nav
            id="footer-links"
            className="grid grid-cols-2 md:grid-cols-3 gap-10 col-span-2"
            aria-label="Footer navigation"
          >
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="font-bold mb-6 text-lg md:text-xl tracking-wide text-gray-800">{group.title}</h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        {...(link.isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                        className="text-base md:text-lg font-medium text-gray-700 transition-all duration-200 hover:text-primary hover:scale-105 hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom Strip: Copyright and legal/social links */}
        <div className="bg-gradient-to-r from-accent/5 via-primary to-accent/5 w-full h-[2px] mt-12 mb-2 opacity-80" />
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Copyright notice */}
            <p className="text-gray-500 text-lg font-semibold tracking-wide">
              &copy; 2025 Devoter. All rights reserved.
            </p>
            <div className="flex gap-6 text-base md:text-lg">
              {/* Terms of Service link */}
              <Link
                href="/terms"
                className="text-gray-500 hover:text-primary hover:bg-primary/10 hover:scale-105 hover:underline transition-all duration-200 rounded px-3 py-1 font-medium"
              >
                Terms of Service
              </Link>
              <span className="text-gray-300">•</span>
              {/* Privacy Policy link */}
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-primary hover:bg-primary/10 hover:scale-105 hover:underline transition-all duration-200 rounded px-3 py-1 font-medium"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          {/* Social icons */}
          <div className="flex space-x-6 mt-6 md:mt-0 items-center">
            {/* Twitter/X icon */}
            <Link
              href="https://x.com/devoterxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-125"
            >
              <Twitter className="text-blue-500 w-7 h-7" />
            </Link>
            {/* GitHub icon */}
            <Link
              href="https://github.com/devoter-xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-125"
            >
              <Github className="text-gray-700 w-7 h-7" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

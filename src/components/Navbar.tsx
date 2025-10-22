"use client";

import clsx from "clsx";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#workflow" },

];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={clsx("fixed top-0 w-full z-50 backdrop-blur-sm h-16")}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="Go to homepage">
          <Image
            src="/logo_text.svg"
            alt="Devoter logo"
            width={50}
            height={30}
            className="object-contain w-32"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center" aria-label="Main navigation">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="relative group font-medium"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-gradient-to-r from-secondary to-primary" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-foreground relative h-6 w-6"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <Menu
            size={24}
            className={clsx(
              "transition-all duration-300 ease-in-out",
              isMobileMenuOpen ? "rotate-90 scale-0" : "rotate-0 scale-100"
            )}
          />
          <X
            size={24}
            className={clsx(
              "absolute top-0 left-0 transition-all duration-300 ease-in-out",
              isMobileMenuOpen ? "rotate-0 scale-100" : "-rotate-90 scale-0"
            )}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        id="mobile-menu"
        className={clsx(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="px-4 pb-4 pt-2 backdrop-blur-xl bg-black/80 rounded-b-lg" role="menu">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block text-white font-medium"
                  role="menuitem"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

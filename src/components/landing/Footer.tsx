import { Github, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12 bg-accent/10" aria-labelledby="footer-heading">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <section className="space-y-4" aria-labelledby="footer-brand-heading">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo_text.svg"
                alt="Devoter Logo"
                width={40}
                height={40}
                className="w-32"
              />
            </div>
            <h2 id="footer-brand-heading" className="sr-only">Devoter Brand</h2>
            <p>
              Empowering Web3 Communities and Projects Through Token-Weighted
              Voting
            </p>
          </section>

          {/* Links Section */}
          <nav
            id="footer-links"
            className="grid grid-cols-2 md:grid-cols-3 gap-8 col-span-2"
            aria-label="Footer navigation"
          >
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features">Features</Link>
                </li>
                {/* <li>
                  <Link href="#">Integrations</Link>
                </li> */}
                <li>
                  <Link href="/changelog">Changelog</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
             
                <li>
                  <Link href="mailto:support@devoter.xyz">Contact us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Socials</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://x.com/devoterxyz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    X
                  </Link>
                </li>
                <li>
                  {/* Farcaster link removed due to 404. Add valid link if available. */}
                </li>
                <li>
                  <Link
                    href="https://github.com/devoter-xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">
            &copy; 2025 Devoter. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 items-center">
            <Link
              href="https://x.com/devoterxyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="text-blue-500" />
            </Link>
            {/* Farcaster icon removed due to 404. Add valid link if available. */}
            <Link
              href="https://github.com/devoter-xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

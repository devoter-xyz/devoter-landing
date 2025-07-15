import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo_text.svg"
                alt="Devoter Logo"
                width={40}
                height={40}
                className="w-32"
              />
            </div>
            <p>
              The all-in-one platform for decentralized autonomous
              organizations.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 col-span-2">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Socials</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">
            &copy; 2025 Devoter. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#">
              <FaTwitter />
            </Link>
            <Link href="#">
              <FaDiscord />
            </Link>
            <Link href="#">
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

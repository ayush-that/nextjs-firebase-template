import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#D35C65]">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Links */}
          <div className="space-y-4">
            <Link
              href="#contact"
              className="block text-white hover:text-white/90 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="#about"
              className="block text-white hover:text-white/90 transition-colors"
            >
              About Us
            </Link>
          </div>

          {/* Middle Links */}
          <div className="space-y-4">
            <Link
              href="/terms"
              className="block text-white hover:text-white/90 transition-colors"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/privacy"
              className="block text-white hover:text-white/90 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-start lg:justify-end space-x-4 items-start">
            <Link
              href="https://www.linkedin.com/company/hirebuddyy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </Link>
            <Link
              href="https://www.instagram.com/hirebuddy_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </Link>
            <Link
              href="https://x.com/hirebuddy_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/twitter.svg"
                alt="X (formerly Twitter)"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col lg:flex-row justify-between items-center">
          <Link
            href="/"
            className="text-white text-2xl font-semibold mb-4 lg:mb-0"
          >
            Hirebuddy
          </Link>
          <p className="text-white">
            Copyright {new Date().getFullYear()}, Hirebuddy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

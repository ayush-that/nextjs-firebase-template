import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-8 lg:px-12 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="text-[#633b3d] font-mabry text-2xl font-black">
        Hirebuddy
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 font-medium">
        <Link
          href="/about"
          className="text-[#b24e55] hover:text-[#E75A82] transition-colors"
        >
          About
        </Link>
        <Link
          href="/pricing"
          className="text-[#b24e55] hover:text-[#E75A82] transition-colors"
        >
          Pricing
        </Link>
        <Link
          href="/blogs"
          className="text-[#b24e55] hover:text-[#E75A82] transition-colors"
        >
          Blogs
        </Link>
        <Link
          href="/contact"
          className="text-[#b24e55] hover:text-[#E75A82] transition-colors"
        >
          Contact
        </Link>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          className="text-[#b24e55] hover:text-[#fc6f78] border border-[#b24e55] hover:border-[#fc6f78] hover:bg-transparent rounded-lg"
        >
          Log in
        </Button>
        <Button className="bg-gradient-to-t from-[#b24e55] to-[#E3405F] text-white rounded-lg">
          Try for free!
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

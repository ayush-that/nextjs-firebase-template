import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-8 lg:px-12 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="text-[#4A3D55] text-2xl font-semibold">
        Hirebuddy
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        <Link
          href="/about"
          className="text-[#4A3D55] hover:text-[#E75A82] transition-colors"
        >
          About
        </Link>
        <Link
          href="/pricing"
          className="text-[#4A3D55] hover:text-[#E75A82] transition-colors"
        >
          Pricing
        </Link>
        <Link
          href="/blogs"
          className="text-[#4A3D55] hover:text-[#E75A82] transition-colors"
        >
          Blogs
        </Link>
        <Link
          href="/contact"
          className="text-[#4A3D55] hover:text-[#E75A82] transition-colors"
        >
          Contact
        </Link>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="text-[#4A3D55] hover:text-[#E75A82]">
          Log in
        </Button>
        <Button className="bg-[#E75A82] hover:bg-[#D64B73] text-white">
          Try for free!
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

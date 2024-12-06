import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Image from "next/image";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Meet from "@/components/Meet";
import Working from "@/components/Working";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="relative w-full min-h-[50vh] md:min-h-[70vh] lg:min-h-screen px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="absolute inset-0 w-full h-full bg-[#fff7f8]" />
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-[#ffeded]" />
        <Image
          src="/hero-image.png"
          alt="Hero illustration"
          fill
          className="object-contain object-center"
          sizes="(max-width: 640px) 100vw, 
                 (max-width: 768px) 95vw,
                 (max-width: 1024px) 90vw,
                 85vw"
          priority
        />
      </div>
      <Problem />
      <Solution />
      <Meet />
      <Working />
      <Pricing />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  );
}

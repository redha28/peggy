"use client";

import { Features } from "@/components/Layouts/Features";
import Footer from "@/components/Layouts/Footer";
import { Gallery } from "@/components/Layouts/Gallery";
import Hero from "@/components/Layouts/Hero";
import { Invitation } from "@/components/Layouts/invitation";
import { Testimony } from "@/components/Layouts/Testimony";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="relative">
        <Hero />
      </div>
      <Features />
      <Gallery />
      <Testimony />
      <Invitation />
      <Footer />
    </main>
  );
}

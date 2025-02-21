"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/Elements/AuroraBackground";
import Headers from "../Fragments/Headers";
import { TextGenerateEffect } from "../Elements/TextGenerateEffect";

const Hero = () => {
  return (
    <AuroraBackground>
      <div className="xl:px-16 min-h-screen py-16 flex flex-col gap-16">
        <Headers />
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 py-32">
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">Peggy</div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            <TextGenerateEffect words={"Record. Save. Share. Your Notes, Your Rules."} />
          </div>
        </motion.div>
      </div>
    </AuroraBackground>
  );
};

export default Hero;

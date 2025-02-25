"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const IconPeggy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.3,
        duration: 1,
        ease: "easeInOut",
      }}
      className="flex gap-4 items-center">
      <div className="h-12 w-12">
        <Image src={"/icon.webp"} width={2000} height={2000} alt="" draggable={false} />
      </div>
      <p className="font-bold text-3xl">Peggy</p>
    </motion.div>
  );
};

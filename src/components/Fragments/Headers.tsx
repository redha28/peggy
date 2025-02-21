import Image from "next/image";
import Button from "../Elements/Button";
import { motion } from "framer-motion";

const Headers = () => {
  return (
    <header className="relative text-white flex justify-between w-[60%] mx-auto">
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
          <Image src={"/icon.webp"} width={2000} height={2000} alt="" />
        </div>
        <p className="font-bold text-3xl">Peggy</p>
      </motion.div>
      <div>
        <Button text="Login" className="text-xl font-bold bg-black custom-shadow-white" />
      </div>
    </header>
  );
};

export default Headers;

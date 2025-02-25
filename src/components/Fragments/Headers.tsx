import Button from "../Elements/Button";
import { IconPeggy } from "../Elements/IconPeggy";
import { motion } from "framer-motion";

const Headers = () => {
  return (
    <header className="relative text-white flex justify-between w-[60%] mx-auto">
      <IconPeggy />
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: "easeInOut",
        }}>
        <Button
          text="Login"
          className="text-xl font-bold bg-black custom-shadow-white hover:scale-95"
          href={"/login"}
        />
      </motion.div>
    </header>
  );
};

export default Headers;

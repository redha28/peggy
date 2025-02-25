"use client";
import bgLogin from "@/assets/Images/login-bg.jpg";
import { BackgroundBeamsWithCollision } from "@/components/Elements/BackgroundBeamsWithCollision";
import { IconPeggy } from "@/components/Elements/IconPeggy";
import Form from "@/components/Layouts/Form";
import Image from "next/image";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <section className="min-h-screen flex">
      <div className="w-1/2 flex flex-col justify-center items-center bg-blue-400 rounded-r-3xl">
        <BackgroundBeamsWithCollision className="px-32">
          <div className="w-full">
            <div className="mb-8">
              <IconPeggy />
            </div>
            <span className="text-white flex flex-col gap-4">
              <span className="font-bold text-3xl">
                Hello Welcome Back{" "}
                <motion.span
                  animate={{
                    rotate: [0, 15, 0, -15, 0],
                  }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                  style={{ display: "inline-block", transformOrigin: "bottom right" }}>
                  👋
                </motion.span>
              </span>
              <span className="text-gray-300">
                Fill out the form correctly or you can login with several option.
              </span>
            </span>
            <div className="mt-4">
              <Form />
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </div>
      <div className="w-1/2 relative">
        <Image
          src={bgLogin}
          alt="Login Background"
          layout="fill"
          objectFit="cover"
          className="rounded-l-[50px]"
          draggable={false}
        />
      </div>
    </section>
  );
};

export default Login;

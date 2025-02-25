"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../Elements/Button";
import Input from "../Elements/Input";
import { FcGoogle } from "react-icons/fc";
import { FaUserAlt, FaLock } from "react-icons/fa";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  // Regex untuk validasi email
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  // Animasi shake
  const shakeAnimation = {
    x: [-5, 5, -5, 5, 0],
    transition: { duration: 0.4 },
  };

  // Fungsi untuk menangani submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors: { email?: string; password?: string } = {};

    // Validasi email
    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      validationErrors.email = "Invalid email format example: peggy@gmail.com";
    }

    // Validasi password
    if (!password) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Jika tidak ada error, lakukan submit
    console.log("Form Submitted", { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      {/* Email Field */}
      <label htmlFor="email" className="font-bold">
        Email
      </label>
      <motion.div
        className={`flex items-center border rounded-xl px-3 py-2 w-full ${
          errors.email ? "border-red-500" : email ? "border-blue-500" : "border-gray-300"
        }`}
        animate={errors.email ? shakeAnimation : {}}>
        <FaUserAlt
          className={`${errors.email ? "text-red-500" : email ? "text-blue-500" : "text-gray-500"}`}
        />
        <Input
          type="text"
          placeHolder="peggy@gmail.com"
          className="flex-1 border-none outline-none focus:ring-0"
          value={email}
          onChange={(e) => {
            setErrors((prev) => ({ ...prev, email: "" }));
            setEmail(e.target.value);
          }}
        />
      </motion.div>
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      {/* Password Field */}
      <label htmlFor="password" className="font-bold">
        Password
      </label>
      <motion.div
        className={`flex items-center border rounded-xl px-3 py-2 w-full ${
          errors.password ? "border-red-500" : password ? "border-blue-500" : "border-gray-300"
        }`}
        animate={errors.password ? shakeAnimation : {}}>
        <FaLock
          className={`${
            errors.password ? "text-red-500" : password ? "text-blue-500" : "text-gray-500"
          }`}
        />
        <Input
          type="password"
          placeHolder="Enter your password"
          className="flex-1 border-none outline-none focus:ring-0"
          value={password}
          onChange={(e) => {
            setErrors((prev) => ({ ...prev, password: "" }));
            setPassword(e.target.value);
          }}
        />
      </motion.div>
      {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

      {/* Forgot Password */}
      <span className="text-gray-400">
        Forgot Password?
        <Link href={"/forgot"} className="text-blue-500 opacity-70 font-bold hover:opacity-100">
          {" "}
          Reset
        </Link>
      </span>

      {/* Submit Button */}
      <Button text="Submit" type="submit" className="text-center" />

      {/* Register Section */}
      <span className="text-gray-400 text-center py-2">
        Not Have An Account?
        <Link href={"/regist"} className="text-blue-500 opacity-70 font-bold hover:opacity-100">
          {" "}
          Register
        </Link>
      </span>

      {/* Divider */}
      <div className="flex items-center w-full">
        <div className="flex-1 border-t border-gray-400"></div>
        <span className="mx-2 text-gray-600">or</span>
        <div className="flex-1 border-t border-gray-400"></div>
      </div>

      {/* Google Sign In */}
      <Button
        text="Sign In With Google"
        Icons={FcGoogle}
        className="text-center hover:bg-white hover:text-gray-600 font-bold transition-all hover:delay-150"
      />
    </form>
  );
};

export default Form;

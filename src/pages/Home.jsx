import React from "react";
import { motion } from "framer-motion";
import config from "@/config/config";
export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-20 text-center relative overflow-hidden"
    >
      <motion.div className="absolute inset-0 w-full h-full">
        <img
          src={config.data.background_home}
          alt="home"
          className="w-screen h-screen object-cover flex items-center justify-center"
        />
      </motion.div>
    </section>
  );
}

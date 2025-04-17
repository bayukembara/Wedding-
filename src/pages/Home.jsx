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
        {/* <img
          src={config.data.background_base}
          alt="home"
          className="w-screen h-screen object-cover flex items-center justify-center"
        /> */}
        <video
          src={config.data.background.src}
          autoPlay={config.data.background.autoplay}
          muted={config.data.background.muted}
          loop={config.data.background.loop}
          playsInline={config.data.background.playsinline}
          className="w-screen h-screen object-cover"
        />
      </motion.div>
    </section>
  );
}

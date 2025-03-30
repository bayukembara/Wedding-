import React from "react";
import { motion } from "framer-motion";

function TimeLine() {
  return (
    <section
      id="timeline"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-20 text-center relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 relative z-10"
      >
        TimeLine
      </motion.div>
    </section>
  );
}

export default TimeLine;

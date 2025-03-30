import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-20 text-center relative overflow-hidden"
    >
      <motion.div>
        <h1>Hello World</h1>
      </motion.div>
    </section>
  );
}

export default Home;

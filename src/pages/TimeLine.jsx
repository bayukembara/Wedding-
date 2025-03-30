import React from "react";
import { motion } from "framer-motion";
import config from "@/config/config";

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
        className="space-y-12 relative z-10 w-full max-w-3xl"
      >
        <h2 className="text-3xl font-bold mb-8">Timeline Perjalanan</h2>

        {config.data.timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col md:flex-row items-center gap-4"
          >
            <div className="w-full md:w-1/3 text-right">
              <h3 className="text-xl font-bold text-blue-500">{item.tahun}</h3>
            </div>

            <div className="relative flex items-center justify-center w-8">
              <div className="h-full w-1 bg-blue-500 absolute"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full z-10"></div>
            </div>

            <div className="w-full md:w-2/3 text-left">
              <h4 className="text-lg font-semibold">{item.judul}</h4>
              <p className="text-gray-600">{item.deskripsi}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default TimeLine;

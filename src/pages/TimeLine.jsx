import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import config from "@/config/config";
import Marquee from "@/components/ui/marquee";

function TimeLine() {
  const [timeline] = useState(config.data.timelineData);

  return (
    <section
      id="timeline"
      className="min-h-screen flex flex-col px-1 py-2 sm:py-5 text-center relative overflow-hidden items-center justify-center"
    >
      <motion.div className="absolute inset-0 w-full h-full">
        <img
          src={config.data.background_img}
          alt="home"
          className="w-screen h-screen object-cover flex items-center justify-center"
        />
      </motion.div>
      <motion.div className="relative z-10 px-4 py-20 items-center justify-center">
        <h2 className="text-3xl md:text-3xl font-bold text-[#a84e1d] drop-shadow-md mb-12">
          Perjalanan Cinta Kami
        </h2>
        <div className="max-w-4xl mx-auto">
          <AnimatePresence>
            <Marquee gradient={false} className="[--duration:45s] py-2">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center mb-8 space-y-4 mx-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg w-[300px] min-h-[200px] flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-[#cf642b] mb-2">
                        {item.tahun}
                      </h3>
                      <h4 className="text-xl font-semibold text-[#ff7f17] mb-2">
                        {item.judul}
                      </h4>
                    </div>
                    <p className="text-[#4E2F1E]">{item.deskripsi}</p>
                  </div>
                </motion.div>
              ))}
            </Marquee>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

export default TimeLine;

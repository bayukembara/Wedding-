import React, { useState } from "react";
import { motion } from "framer-motion";
import config from "@/config/config";

function TimeLine() {
  const [timeline] = useState(config.data.timelineData);

  return (
    <section
      id="timeline"
      className="min-h-screen flex flex-col px-1 py-2 sm:py-5 text-center relative overflow-hidden"
    >
      <motion.div className="absolute inset-0 w-full  h-full">
        <img
          src={config.data.background_base}
          alt="home"
          className="w-full h-full object-cover flex items-center justify-center"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-4 relative z-10 w-full max-w-6xl mx-auto"
      >
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            className="text-2xl font-bold mb-4 z-10 text-[#fd6412] drop-shadow-[2px_2px_#461e08]"
          >
            Perjalanan Cinta Kami
          </motion.h2>
          {/* Garis tengah utama */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-[90%] w-0.5 bg-[#e66814]"></div>

          {config.data.timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-center justify-center mb-2 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Konten Timeline */}
              <div
                className={`w-6/12 ${index % 2 === 0 ? "text-right pr-4" : "text-left pl-4"}`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/40 backdrop-blur-sm p-1.5 rounded-md shadow-sm border border-gray-100 inline-block"
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] text-justify text-balance font-bold text-[#884e0c]">
                      {item.tahun}
                    </span>
                    <h4 className="text-[10px] text-justify text-balance font-semibold text-[#884e0c]">
                      {item.judul}
                    </h4>
                    <p className="text-[10px] text-justify text-balance text-[#050505]">
                      {item.deskripsi}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Titik Timeline di Tengah */}
              <div className="relative w-10 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-1.5 h-1.5 bg-blue-500 rounded-full z-10 shadow-sm border border-white"
                ></motion.div>

                {/* Garis horizontal ke konten */}
                <div
                  className={`absolute w-5 h-0.5 bg-blue-400 ${
                    index % 2 === 0 ? "-left-3" : "-right-3"
                  }`}
                ></div>
              </div>

              {/* Sisi kosong untuk balance */}
              <div className="w-6/12"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default TimeLine;

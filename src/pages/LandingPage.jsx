// src/pages/LandingPage.jsx
import config from "@/config/config";
import { formatEventDate } from "@/lib/formatEventDate";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const LandingPage = ({ onOpenInvitation }) => {
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const guestParam = urlParams.get("guest");
    if (guestParam) {
      setGuestName(guestParam);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden"
    >
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div className="absolute inset-0 w-full h-full">
          <img
            src={config.data.background_landing}
            alt="home"
            className="w-screen h-screen object-fit flex items-center justify-center"
          />
        </motion.div>
        <motion.div className="w-full h-screen flex items-center justify-center">
          {/* Card Container with Video */}
          <div className="relative h-screen w-[30rem]">
            {/* Center Small Card */}
            <div className="absolute inset-0 flex items-center justify-center mt-[200px]">
              <div className="bg-white/50 flex p-8 rounded-xl w-[90%] md:w-[90%] items-center justify-center">
                {/* Card Content */}
                <div className="text-center w-full">
                  <h1 className="text-center font-bold text-xl uppercase mb-4">
                    Celebration the love
                    <p className="text-center font-bold text-xl my-2 uppercase">
                      of
                    </p>
                  </h1>

                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="h-px w-12 bg-[#06A77D]" />
                    <div className="w-2 h-2 rounded-full bg-[#06A77D]" />
                    <div className="h-px w-12 bg-[#06A77D]" />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-800 leading-tight uppercase mb-4">
                    {config.data.groomName}
                    <span className="text-[#06A77D] mx-2">&</span>
                    {config.data.brideName}
                  </h2>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="space-y-2 mb-4"
                  >
                    <p className="text-black font-bold italic text-md">
                      To the Honorable
                    </p>
                    <p className="font-bold text-[40px] rounded-full border-4 border-t-transparent border-r-transparent border-l-transparent border-b-black text-[#06A77D] shadow-lg">
                      {guestName ? guestName : "Guest"}
                    </p>
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    onClick={onOpenInvitation}
                    className="w-full bg-[#b1e5cd] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#06A77D] transition-all duration-200"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <span className="text-black from-black via-sky-50/30 to-black">
                        Buka Undangan
                      </span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <span className="text-black">→</span>
                      </motion.span>
                    </span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LandingPage;

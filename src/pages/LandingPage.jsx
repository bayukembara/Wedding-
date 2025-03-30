// src/pages/LandingPage.jsx
import config from "@/config/config";
import { formatEventDate } from "@/lib/formatEventDate";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

const LandingPage = ({ onOpenInvitation }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen relative overflow-hidden"
  >
    {/* Decorative Background */}
    {/* <img
      src={config.data.background_img}
      className="absolute inset-0 h-full w-full object-cover"
    /> */}
    <div className="absolute inset-0 bg-gradient-to-b from-gray-500/50 via-blue-50/40 to-black/100" />
    <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-sky-100/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-pink-100/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

    {/* Main Content */}
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div className="w-full h-screen flex items-center justify-center">
        {/* Card Container with Video */}
        <div className="relative h-screen w-96">
          {/* Center Small Card */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/0 flex p-8 rounded-xl w-[80%] md:w-[90%] items-center justify-center">
              {/* Card Content */}
              <div className="text-center w-full">
                <h1 className="text-center font-serif font-light text-xl uppercase mb-4">
                  Celebration the love
                  <p className="text-center font-serif font-light text-xl my-2 uppercase">
                    of
                  </p>
                </h1>

                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-px w-12 bg-sky-200/50" />
                  <div className="w-2 h-2 rounded-full bg-sky-300" />
                  <div className="h-px w-12 bg-sky-200/50" />
                </div>

                <h2 className="text-2xl font-serif text-gray-800 leading-tight uppercase mb-4">
                  {config.data.groomName}
                  <span className="text-sky-400 mx-2">&</span>
                  {config.data.brideName}
                </h2>

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
                  className="w-full bg-sky-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-sky-600 transition-all duration-200"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span className="text-white from-white via-sky-50/30 to-black">
                      Buka Undangan
                    </span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
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

export default LandingPage;

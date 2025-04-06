import EventCards from "@/components/EventsCard";
import config from "@/config/config";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Events() {
  return (
    <>
      {/* Event Section */}
      <section id="event" className="min-h-screen relative overflow-hidden">
        <motion.div className="absolute inset-0 w-full  h-full">
          <img
            src={config.data.background_base}
            alt="home"
            className="w-full h-full object-cover flex items-center justify-center"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 py-20"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4 mb-10 z-10"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1,
                type: "spring",
              }}
              className="inline-block text-white text-sm mb-2 bg-[#a84e1d]/30 rounded-full border border-black px-2 py-1"
            >
              Catat Tanggal Penting Ini
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-4xl md:text-5xl leading-tight"
            >
              <h2 className="text-[#331809] font-semibold">
                Rangkaian Acara Pernikahan
              </h2>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-gray-500 max-w-md mx-auto"
            >
              <p className="text-white font-normal rounded-xl px-1 py-1">
                Kami Mengundang Anda untuk Merayakan Hari Istimewa Sebagai Awal
                Perjalanan Cinta Kami
              </p>
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center justify-center gap-4 mt-2"
            >
              <div className="h-[2px] w-12 bg-pink-300" />
              <div className="text-pink-500">
                <Heart className="w-5 h-5" fill="currentColor" />
              </div>
              <div className="h-[2px] w-12 bg-pink-300" />
            </motion.div>
          </motion.div>

          {/* Events Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.5,
              duration: 0.6,
              type: "spring",
              stiffness: 70,
              damping: 15,
            }}
            className="max-w-2xl mx-auto"
          >
            <EventCards events={config.data.agenda} />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

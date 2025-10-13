import EventCards from "@/components/EventsCard";
import { useEffect, useState } from "react";
import config from "@/config/config";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Events() {
  const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    function calculateTimeLeft() {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
          jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
          menit: Math.floor((difference / 1000 / 60) % 60),
          detik: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    }
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => clearInterval(timer);
    }, [targetDate]);

    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
        {Object.keys(timeLeft).map((interval) => (
          <motion.div
            key={interval}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-sky-200"
          >
            <span className="text-xl sm:text-2xl font-bold text-[#d1a575]">
              {timeLeft[interval]}
            </span>
            <span className="text-xs text-gray-500 capitalize">{interval}</span>
          </motion.div>
        ))}
      </div>
    );
  };

  const FloatingHearts = () => {
    const heartCount = 40; // lebih banyak heart

    const colors = [
      "text-red-500",
      "text-pink-500",
      "text-rose-500",
      "text-fuchsia-500",
    ];
    const sizes = ["w-6 h-6", "w-8 h-8", "w-10 h-10"]; // variasi ukuran

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(heartCount)].map((_, i) => {
          const sizeClass = sizes[Math.floor(Math.random() * sizes.length)];
          const colorClass = colors[i % colors.length];
          const startX = Math.random() * window.innerWidth;
          const endX = startX + (Math.random() * 100 - 50); // sedikit drift

          return (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                scale: 0,
                x: startX,
                y: window.innerHeight,
              }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1, 1, 0.5],
                x: endX,
                y: -100,
              }}
              transition={{
                duration: 6 + Math.random() * 2, // lambat & sedikit variasi
                repeat: Infinity,
                delay: i * 0.3, // lebih sering muncul
                ease: "easeInOut",
              }}
              className={`absolute ${sizeClass} ${colorClass}`}
            >
              <Heart fill="currentColor" className="w-full h-full" />
            </motion.div>
          );
        })}
      </div>
    );
  };
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
              className="inline-block text-black text-sm mb-2 bg-[#d1a575]/30 rounded-full border border-black px-2 py-1"
            >
              Countdown to Our Special Day
            </motion.span>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-gray-500 max-w-md mx-auto"
            >
              <p className="text-black font-normal rounded-xl px-1 py-1">
                Kami Mengundang Anda untuk Merayakan Hari Istimewa Sebagai Awal
                Perjalanan Cinta Kami
              </p>
            </motion.p>

            {/* Decorative Line */}
            <div className="pt-6 relative">
              <FloatingHearts />
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart
                  className="w-10 sm:w-12 h-10 sm:h-12 text-rose-600 mx-auto"
                  fill="currentColor"
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-gray-500 max-w-md mx-auto"
            >
              <CountdownTimer targetDate={config.data.date} />
            </motion.p>

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

          {/* Events Grid */}
        </motion.div>
      </section>
    </>
  );
}

import { Calendar, Clock, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import config from "@/config/config";
import { formatEventDate } from "@/lib/formatEventDate";
import { safeBase64 } from "@/lib/base64";

export default function Hero() {
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
            className="flex flex-col items-center p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-sky-100"
          >
            <span className="text-xl sm:text-2xl font-bold text-orange-600">
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
      <section
        id="schedule"
        className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-10 text-center relative overflow-hidden"
      >
        <motion.div className="absolute inset-0 w-full h-full">
          <img
            src={config.data.background_base}
            alt="home"
            className="w-screen h-screen object-cover flex items-center justify-center"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-2 relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mx-auto"
          >
            <span className="px-4 py-1 text-sm bg-[#804100]/30 text-[#fcfcfc] font-light rounded-full border border-[#492807]">
              Catat Tanggal Penting Ini
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white font-normal italic text-base sm:text-lg"
            >
              InsyaAllah Kami Akan Menikah
            </motion.p>
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-3xl sm:text-4xl font-serif bg-clip-text text-transparent text-white drop-shadow-[2px_2px_0_black]"
            >
              <p>{config.data.groomFullName}</p>
              <span>&</span>
              <p>{config.data.brideFullName}</p>
            </motion.h2>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="relative max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-2xl" />

            <div className="relative px-4 sm:px-8 py-8 sm:py-10 rounded-2xl bg-gradient-to-r from-transparent via-orange-300 to-transparent border border-orange-300/50">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px">
                <div className="w-20 sm:w-32 h-[2px] bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
              </div>

              <div className="space-y-6 text-center">
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-4 h-4 text-[#4e2915] " />
                    <span className="text-[#4e2915] font-medium text-sm sm:text-base">
                      {formatEventDate(config.data.date, "full")}
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex items-center justify-center space-x-2"
                  >
                    <Clock className="w-4 h-4 text-[#4e2915]" />
                    <span className="text-[#4e2915]  font-medium text-sm sm:text-base">
                      {config.data.time}
                    </span>
                  </motion.div>
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-px">
                <div className="w-20 sm:w-32 h-[2px] bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
              </div>
            </div>

            <div className="absolute -top-2 -right-2 w-16 sm:w-24 h-16 sm:h-24 bg-sky-100/20 rounded-full blur-xl" />
            <div className="absolute -bottom-2 -left-2 w-16 sm:w-24 h-16 sm:h-24 bg-sky-100/20 rounded-full blur-xl" />
          </motion.div>

          <CountdownTimer targetDate={config.data.date} />

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
        </motion.div>
      </section>
    </>
  );
}

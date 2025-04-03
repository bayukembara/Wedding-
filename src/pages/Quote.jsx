import React from "react";
import { motion } from "framer-motion";
import config from "@/config/config";

function Home() {
  return (
    <section
      id="quote"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-20 text-center relative overflow-hidden"
    >
      <motion.div className="absolute inset-0 w-full h-full">
        <img
          src={config.data.background_img}
          alt="home"
          className="w-screen h-screen object-cover flex items-center justify-center"
        />
      </motion.div>
      <div className="relative z-10 flex flex-col items-center justify-center px-">
        <h1 className="text-2xl font-bold text-[#f3efdf]  drop-shadow-[2px_2px_0_black]">
          Holy Qur'an
        </h1>
        <h2 className="text-xl font-bold text-[#f3efdf] drop-shadow-[2px_2px_0_black]">
          Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan
          pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa
          tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih
          sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
          tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
        </h2>
        <h2 className="text-xl font-bold text-[#f3efdf] drop-shadow-[2px_2px_0_black]">
          ~ Q.S. Ar - Rum:21 ~
        </h2>
      </div>
    </section>
  );
}

export default Home;

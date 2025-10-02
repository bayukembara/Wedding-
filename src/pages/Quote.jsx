import React from "react";
import { motion } from "framer-motion";
import config from "@/config/config";
import { Heart } from "lucide-react";

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
          className="w-screen h-screen object-fit flex items-center justify-center"
        />
      </motion.div>
      {/* <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-[#a84e1d] text-2xl font-bold drop-shadow-md">
          Holy Qur'an
        </h1>
        <div className="relative flex items-center justify-center">
          <div className="h-[1px] w-12 bg-[#eed985]" />
          <div className="text-[#eed985]">
            <Heart className="w-4 h-4" fill="currentColor" />
          </div>
          <div className="h-[1px] w-12 bg-[#eed985]" />
        </div>
        <p class="text-[#4E2F1E] text-md mt-4 font-semibold">
          Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan
          pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa
          tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih
          sayang.
        </p>

        <p class="text-[#4E2F1E] text-md mt-2 font-semibold">
          Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda
          (kebesaran Allah) bagi kaum yang berpikir.
        </p>
        <h2 className="text-xl text-[#a84e1d] italic font-medium mt-4">
          ~ Q.S. Ar - Rum:21 ~
        </h2>
      </div> */}
    </section>
  );
}

export default Home;

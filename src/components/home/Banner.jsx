"use client"

import React from "react";

import Image from "next/image";
import QuizImage from "@/public/Quiz Image.png";
import { FaBookOpen } from "react-icons/fa6";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start bg-mainCyan pt-10 lg:px-[10%] px-[5%] w-[100vw] lg:h-[500px] h-auto">
      <div className="lg:w-[40vw] w-full flex justify-center flex-col">
        <p className="lg:text-6xl text-center lg:text-start text-4xl font-extrabold leading-tight mt-8 lg:mt-0 text-deepGreen">
          Challenge Your Mind
        </p>
        <p className="text-slate-950 text-center lg:text-start text-[20px] mt-5">
          Ignite your curiosity with our thought-provoking quizzes. A platform
          where learning is exciting, challenging and enjoyable.
        </p>
        <motion.button
          animate={{
            y: ["0%", "10%", "0%"],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          onClick={() => window.location.href = "/quizz/take-a-quizz"}
          className="bg-deepGreen px-3 py-2 shadow-xl mt-16 lg:mt-8 w-full lg:w-[200px] hover:bg-mainYellow hover:text-slate-950 font-medium flex justify-center items-center gap-2"
        >
          Take A Quizz
          <FaBookOpen size={"20px"} />
        </motion.button>
      </div>
      <div className="lg:w-[60vw] w-full flex items-center justify-center lg:items-start lg:justify-end py-5 lg:py-0">
        <Image src={QuizImage} alt="" className="lg:w-[60%] w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default Banner;

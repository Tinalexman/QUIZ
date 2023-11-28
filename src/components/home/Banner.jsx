"use client"

import React from "react";

import Image from "next/image";
import QuizImage from "@/public/Quiz Image.png";
import { FaBookOpen } from "react-icons/fa6";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="flex sm:flex-col h-auto mt-16 px-[10%] sm:px-[5%]">
      <div className="w-[40vw] sm:w-full sm:flex-col flex justify-center flex-col">
        <p className="text-6xl sm:text-center sm:text-4xl font-extrabold leading-tight sm:mt-8 text-deepGreen">
          Challenge Your Mind
        </p>
        <p className="text-slate-950 sm:text-center text-[20px] mt-5">
          Ignite your curiosity with our thought-provoking quizzes. A platform
          where learning is exciting, challenging and enjoyable
        </p>

        <div className="bg-mainCyan mt-10 mb-10 clip-path-mypolygon h-[100px] w-[300px]">

        </div>

        <motion.button
          animate={{
            y: ["0%", "10%", "0%"],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          onClick={() => {}}
          className="bg-deepGreen px-3 py-2 shadow-xl sm:mt-16 mt-8 sm:w-full w-[200px] hover:bg-mainCyan hover:text-slate-950 font-medium flex justify-center items-center gap-2"
        >
          Take A Quizz
          <FaBookOpen size={"20px"} />
        </motion.button>
      </div>
      <div className="w-[60vw] sm:w-full">
        <Image src={QuizImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;

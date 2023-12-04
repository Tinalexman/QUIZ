"use client"

import React from "react";

import Image from "next/image";
import Question from "@/public/Questions.png";

import { motion } from "framer-motion";

const Reason = () => {
  return (
    <div className="bg-white flex w-full  sm:flex-col-reverse justify-between px-[10%] pt-20 pb-32">
      <div className="w-[50%] sm:w-full sm:pt-10">
        <Image src={Question} alt="Question" className="" />
      </div>

      <div className="w-[40%] sm:w-full flex items-center">
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className="w-[90%] cursor-pointer sm:w-full sm:h-full  flex flex-col px-[5%] h-[90%] bg-mainCyan justify-center shadow-xl"
        >
          <p className="text-deepGreen font-extrabold mt-10 sm:text-2xl text-4xl text-center ">
            Diverse Quiz Realms Await You
          </p>
          <p className="text-slate-950 text-[18px] sm:text-[16px] pb-10 font-normal text-center mt-10">
            From science to history, our extensive range of quiz categories
            caters to every curious mind. Dive into your favourite subjects,
            chalenge yourself, and emerge as the ultimate quiz champion. Let the
            exploration begin!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Reason;

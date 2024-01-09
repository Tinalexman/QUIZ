"use client"

import React from "react";

import Image from "next/image";
import Question from "@/public/Questions.png";

import { motion } from "framer-motion";

const Reason = () => {
  return (
    <div className="bg-white flex w-full items-center flex-col-reverse lg:flex-row justify-between lg:px-[10%] px-[5%] pt-20 pb-32">
      <div className="lg:w-[50%] w-full pt-10 lg:pt-0">
        <Image src={Question} alt="Question" className="" />
      </div>


      <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className="lg:w-[45%] cursor-pointer w-full h-full flex flex-col px-[5%] lg:h-[90%] bg-mainCyan justify-center shadow-xl"
        >
          <p className="text-deepGreen font-extrabold mt-10 text-2xl lg:text-4xl text-center ">
            Diverse Quiz Realms Await You
          </p>
          <p className="text-slate-950 lg:text-[18px] text-[16px] pb-10 font-normal text-center mt-10">
            From science to history, our extensive range of quiz categories
            caters to every curious mind. Dive into your favourite subjects,
            challenge yourself, and emerge as the ultimate quiz champion. Let the
            exploration begin!
          </p>
        </motion.div>


    </div>
  );
};

export default Reason;

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Background from "@/public/Questions Background.jpg";
import Logo from "@/public/Logo.png";
import { motion } from "framer-motion";
import Link from "next/link";

import Arts from "@/public/Arts.png";
import Food from "@/public/Food.png";
import Geography from "@/public/Geography.png";
import History from "@/public/History.png";
import Knowledge from "@/public/Knowledge.png";
import Movie from "@/public/Movie.png";
import Music from "@/public/Music.png";
import Science from "@/public/Science.png";
import Society from "@/public/Society.png";
import Sports from "@/public/Sports.png";

import OfferCard from "../reusable/OfferCard";
import SelectCard from "../reusable/SelectCard";

const QuizHome = () => {
  const [score, setScore] = useState("");
  useEffect(() => {
    let prevScore = window.localStorage.getItem("Score");
    if (
      prevScore !== undefined &&
      !prevScore !== null &&
      prevScore.length > 0
    ) {
      setScore(prevScore);
    }
  }, []);

  return (
    <div className="lg:h-[100vh] h-auto relative flex justify-center items-center">
      <Image
        src={Background}
        alt=""
        className="w-[100vw] h-[100vh] object-cover absolute top-0 left-0 opacity-50"
      />

      <div className="lg:w-[40%] w-[80%] absolute lg:top-[25vh] lg:left-[30%] top-[20vh] left-[10%] bg-white z-10 rounded-[30px] px-10 flex flex-col items-center shadow-xl lg:h-[50vh] h-[60vh]">
        <Link href={"/"}>
          <Image
            src={Logo}
            alt=""
            className="lg:w-[75px] h-auto w-[50px] mt-10"
          />
        </Link>
        <p className="text-slate-700 lg:text-[18px] text-[16px] font-normal text-center mt-5">
          Buckle up for another <span className="font-medium">Quizz</span>{" "}
          adventure
        </p>

        <p className="text-slate-800 mt-10 lg:text-[18px] text-center">
          You answered <span className="font-medium">{score}</span> of 10
          questions correctly
        </p>

        <motion.button
          animate={{
            y: ["0%", "10%", "0%"],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          onClick={() => {
            window.localStorage.setItem("Score", "");
            window.location.href = "/quizz/take-a-quizz";
          }}
          className="bg-deepGreen px-3 py-2 shadow-xl mt-10  w-full lg:w-[200px] hover:bg-mainYellow hover:text-slate-950 font-medium"
        >
          Take Another Quizz
        </motion.button>
      </div>
    </div>
  );
};

export default QuizHome;

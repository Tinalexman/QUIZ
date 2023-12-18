"use client";

import React, { useState } from "react";
import Image from "next/image";
import Background from "@/public/Questions Background.jpg";
import Logo from "@/public/Logo.png";
import { motion } from "framer-motion";

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
  const offers = [
    {
      image: Arts,
      name: "Arts and Literature",
    },
    {
      image: Food,
      name: "Food and Drink",
    },
    {
      image: Geography,
      name: "Geography",
    },
    {
      image: History,
      name: "History",
    },
    {
      image: Movie,
      name: "Film and TV",
    },
    {
      image: Music,
      name: "Music",
    },
    {
      image: Science,
      name: "Science",
    },
    {
      image: Society,
      name: "Society and Culture",
    },
    {
      image: Sports,
      name: "Sports and Leisure",
    },
    {
      image: Knowledge,
      name: "General Knowledge",
    },
  ];

  const [categories, setCategories] = useState([false, false, false, false, false, false, false, false, false, false]);

  return (
    <div className="lg:h-[100vh] h-auto relative flex justify-center items-center">
      <Image
        src={Background}
        alt=""
        className="lg:w-[100vw] lg:h-[100vh] object-cover absolute top-0 left-0 opacity-50 lg:block hidden"
      />

      <div className="lg:w-[60%] bg-white z-10 rounded-[30px] px-10 flex flex-col items-center shadow-xl h-[90vh]">
        <Image
          src={Logo}
          alt=""
          className="lg:w-[75px] h-auto w-[50px] mt-10"
        />
        <p className="text-slate-800 lg:text-[18px] text-[16px] font-normal text-center mt-5">
          Buckle up for your <span className="font-medium">Quizz</span>{" "}
          adventure and let the exploration begin!
        </p>

        <p className="text-slate-600 mt-5 lg:text-[14px] text-center">Note: you can only answer 10 questions per category and you can select as much categories as you want</p>

        <div className="mt-10 flex flex-col w-full">
          <div className="flex justify-around flex-col lg:justify-around lg:flex-row w-full">
            {offers.map((offer, i) => {
              return i < 5 ? (
                <SelectCard key={i} image={offer.image} name={offer.name} selected={categories[i]}/>
              ) : (
                <></>
              );
            })}
          </div>
          <div className="flex justify-around flex-col mt-10 lg:justify-around lg:flex-row w-full">
            {offers.map((offer, i) => {
              return i >= 5 ? (
                <SelectCard key={i} image={offer.image} name={offer.name} onClick={() => {
                  categories[i] = !categories[i];
                  setCategories(categories);
                    
                }} selected={categories[i]}/>
              ) : (
                <></>
              );
            })}
          </div>
        </div>
        <motion.button
          animate={{
            y: ["0%", "10%", "0%"],
            transition: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          onClick={() => (window.location.href = "/quizz/take-a-quizz")}
          className="bg-deepGreen px-3 py-2 shadow-xl mt-10  w-full lg:w-[200px] hover:bg-mainYellow hover:text-slate-950 font-medium"
        >
          Start Quizz
        </motion.button>
      </div>
    </div>
  );
};

export default QuizHome;

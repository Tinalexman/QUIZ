import React from "react";

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

const Offers = () => {
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

  return (
    <div className="py-20 flex flex-col bg-white px-[5%]">
      <p className="text-deepGreen font-extrabold text-2xl lg:text-4xl text-center">
        Categories
      </p>
      <p className="text-slate-950 text-[16px] font-normal text-center mt-2">
        Dive into a world of quizzes designed to entertain and educate
      </p>

      <div className="flex lg:flex-col flex-row gap-0 lg:gap-20 mt-20">
        <div className="flex justify-around items-center gap-10 flex-col lg:flex-row w-full lg:px-[10%] px-0">
          {offers.map((offer, i) => {
            return i < 5 ? (
              <OfferCard key={i} image={offer.image} name={offer.name} />
            ) : (
              <></>
            );
          })}
        </div>
        <div className="flex justify-around items-center gap-10 flex-col lg:flex-row w-full lg:px-[10%] px-0">
          {offers.map((offer, i) => {
            return i >= 5 ? (
              <OfferCard key={i} image={offer.image} name={offer.name} />
            ) : (
              <></>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Offers;

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SelectCard = ({ image, name, selected = false }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      className={`flex flex-col ${
        selected && "bg-mainCyan "
      } lg:w-[150px] h-[150px] rounded-lg shadow-lg items-center px-2 justify-center`}
    >
      <Image src={image} className="lg:w-[55px] h-auto" alt=" " />
      <p
        className={`${
          selected ? "text-white" : "text-slate-950"
        } mt-4 text-center text-[14px] font-medium cursor-default`}
      >
        {name}
      </p>
    </motion.div>
  );
};

export default SelectCard;

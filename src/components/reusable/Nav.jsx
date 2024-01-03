import React from "react";

import Image from "next/image";
import Logo from "@/public/Logo.png";
import Link from "next/link";

import { FaBarsStaggered } from "react-icons/fa6";

const Nav = ({ useCyan = false }) => {
  return (
    <div
      className={`w-full h-[10vh] px-[5%] lg:px-[10%] pt-3 flex items-center justify-between ${
        useCyan && "bg-mainCyan"
      }`}
    >
      <div>
        <Link href={"/"} className="flex gap-2 items-center sm:mt-5">
          <Image src={Logo} alt="" className="lg:w-[75px] h-auto w-[50px]" />
          <p className={`lg:text-[32px] text-[20px] text-deepGreen`}>Quizz</p>
        </Link>
      </div>

      <div className="lg:flex-row lg:flex items-center h-full gap-10 lg:block hidden">
        <Link
          href={"/"}
          className="hover:underline text-deepGreen font-medium text-[20px]"
        >
          Home
        </Link>
        <Link
          href={"/about"}
          className="hover:underline text-deepGreen font-medium text-[20px]"
        >
          About
        </Link>
        <Link
          href={"/quizz/take-a-quizz"}
          className="bg-deepGreen px-3 py-2 hover:text-deepGreen text-center lg:w-[150px] hover:bg-white font-medium hover:border hover:border-deepGreen  "
        >
          Take A Quizz
        </Link>
      </div>

      <div className="block lg:hidden">
      <FaBarsStaggered   size={"25px"} fill="#88AE45"/>
      </div>

    </div>
  );
};

export default Nav;

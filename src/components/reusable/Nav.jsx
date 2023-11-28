import React from "react";

import Image from "next/image";
import Logo from "@/public/Logo.png";
import Link from "next/link";

const Nav = ({useCyan = false}) => {
  return (
    <div className={`w-full h-[10vh] sm:px-[5%] px-[10%] pt-[3%] flex items-center justify-start ${useCyan && "bg-mainCyan"}`}>
      <Link href={"/"} className="flex gap-2 items-center sm:mt-5">
        <Image src={Logo} alt="" className="w-[75px] sm:w-[50px] h-[75px] sm:h-[50px]" />
        <p className={`text-[32px] sm:text-[20px] text-deepGreen`}>Quizz</p>
      </Link>
    </div>
  );
};

export default Nav;

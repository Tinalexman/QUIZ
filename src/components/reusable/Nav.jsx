import React from "react";

import Image from "next/image";
import Logo from "@/public/Logo.png";
import Link from "next/link";

const Nav = ({useCyan = false}) => {
  return (
    <div className={`w-full h-[10vh] px-[5%] lg:px-[10%] pt-3 flex items-center justify-start ${useCyan && "bg-mainCyan"}`}>
      <Link href={"/"} className="flex gap-2 items-center sm:mt-5">
        <Image src={Logo} alt="" className="lg:w-[75px] h-auto w-[50px]" />
        <p className={`lg:text-[32px] text-[20px] text-deepGreen`}>Quizz</p>
      </Link>
    </div>
  );
};

export default Nav;

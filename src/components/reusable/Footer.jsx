import React from "react";
import Image from "next/image";
import Logo from "@/public/Logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white w-full flex flex-col px-[10%] sm:px-[5%] pb-4">
      <div className="flex justify-between sm:flex-col">
        <div className="flex flex-col">
          <Link href={"/"} className="flex gap-2 items-center sm:mt-5">
            <Image
              src={Logo}
              alt=""
              className="w-[75px] sm:w-[50px] h-[75px] sm:h-[50px]"
            />
            <p className={`text-[32px] sm:text-[20px] text-deepGreen`}>Quizz</p>
          </Link>
          <p className="text-slate-950 text-[16px] sm:mt-3">
            "Explore, Play, Conquer - Your Quizz Adventure Awaits!"
          </p>

          <Link href={""} className=" text-deepGreen text-[16px] mt-10 sm:mt-5">
            Take A Quizz
          </Link>
        </div>

        <div className="flex flex-col sm:mt-10">
          <p className="text-deepGreen font-bold text-[20px]">Attributions</p>
          <div className="mt-10 sm:mt-3 text-slate-950 text-[16px]">
            <a
              target="_blank"
              href="https://icons8.com/icon/112289/book"
              className=" underline"
            >
              Book Logo
            </a>{" "}
            by{" "}
            <a target="_blank" href="https://icons8.com" className="underline">
              Icons8
            </a>
          </div>
          <div className="text-slate-950 text-[16px] underline">
            Quiz Image by{" "}
            <a href="https://www.freepik.com/free-vector/set-hand-drawn-questionnaire-elements_1035945.htm#query=test%20quiz&position=2&from_view=keyword&track=ais&uuid=b5e8b17d-925a-4353-97a8-3504c260fd64">
              Freepik
            </a>
          </div>
        </div>
      </div>

      <p className=" mt-10 text-slate-400 sm:text-[16px] text-center sm:leading-[28px] text-base font-normal leading-loose mb-10">
        © {new Date().getFullYear()} Quizz. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

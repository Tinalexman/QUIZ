import React from "react";
import Image from "next/image";
import Logo from "@/public/Logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white w-full flex flex-col lg:px-[10%] px-[5%] pb-4">
      <div className="flex justify-between flex-col lg:flex-row">
        <div className="flex flex-col">
          <Link href={"/"} className="flex gap-2 items-center mt-5 lg:mt-0">
            <Image src={Logo} alt="" className="lg:w-[75px] w-[50px] h-auto" />
            <p className={`lg:text-[32px] text-[20px] text-deepGreen`}>Quizz</p>
          </Link>
          <p className="text-slate-950 text-[16px] mt-3 lg:mt-0">
            "Explore, Play, Conquer - Your Quizz Adventure Awaits!"
          </p>

          <Link
            href={"/quizz/take-a-quizz"}
            className=" text-deepGreen text-[16px] lg:mt-10 mt-5"
          >
            Take A Quizz
          </Link>
        </div>

        <div className="flex flex-col mt-10 lg:mt-0">
          <p className="text-deepGreen font-bold text-[20px]">Attributions</p>
          <div className="flex gap-10 flex-col lg:flex-row mt-10">
            <div className="flex flex-col">
              <div className="mt-3 lg:mt-0 text-slate-950 text-[16px]">
                <a
                  target="_blank"
                  href="https://icons8.com/icon/112289/book"
                  className=" underline"
                >
                  Book Logo
                </a>{" "}
                by{" "}
                <a
                  target="_blank"
                  href="https://icons8.com"
                  className="underline"
                >
                  Icons8
                </a>
              </div>
              <div className="text-slate-950 text-[16px]">
                <a
                  target="_blank"
                  href="https://icons8.com/icon/0jp9KKXCOKoz/musical-notes"
                  className="underline"
                >
                  Musical Notes
                </a>{" "}
                icon by{" "}
                <a
                  target="_blank"
                  href="https://icons8.com"
                  className="underline"
                >
                  Icons8
                </a>
              </div>
              <div className="text-slate-950 text-[16px]">
                <a
                  target="_blank"
                  href="https://icons8.com/icon/lKuthpO43saI/world-cup"
                  className="underline"
                >
                  World Cup
                </a>{" "}
                icon by{" "}
                <a
                  target="_blank"
                  href="https://icons8.com"
                  className="underline"
                >
                  Icons8
                </a>
              </div>
              <div className="text-slate-950 text-[16px]">
                <a
                  target="_blank"
                  href="https://icons8.com/icon/XkZjajWvqlA_/film-reel"
                  className="underline"
                >
                  Film
                </a>{" "}
                icon by{" "}
                <a
                  target="_blank"
                  href="https://icons8.com"
                  className="underline"
                >
                  Icons8
                </a>
              </div>
              <div className="text-slate-950 text-[16px]">
                <a
                  target="_blank"
                  className="underline"
                  href="https://icons8.com/icon/-UEy3x74oKpE/theatre-mask"
                >
                  Theatre Mask
                </a>{" "}
                icon by{" "}
                <a
                  target="_blank"
                  href="https://icons8.com"
                  className="underline"
                >
                  Icons8
                </a>
              </div>
              <div className="text-slate-950 text-[16px]">
                <a
                  target="_blank"
                  href="https://icons8.com/icon/twHuMjvyQGVz/archeology"
                  className="underline"
                >
                  Archeology
                </a>{" "}
                icon by{" "}
                <a
                  target="_blank"
                  href="https://icons8.com"
                  className="underline"
                >
                  Icons8
                </a>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="text-slate-950 text-[16px]">
                <a
                  target="_blank"
                  href="https://icons8.com/icon/T4X2YQkV6_cz/racism"
                  className="underline"
                >
                  Racism
                </a>{" "}
                icon by{" "}
                <a
                  target="_blank"
                  href="https://icons8.com"
                  className="underline"
                >
                  Icons8
                </a>
              </div>
              <div className="text-slate-950 text-[16px]">
                <a
                  target="_blank"
                  href="https://icons8.com/icon/Isc1a-dT0sJb/experiment"
                  className="underline"
                >
                  Experiment
                </a>{" "}
                icon by{" "}
                <a
                  target="_blank"
                  href="https://icons8.com"
                  className="underline"
                >
                  Icons8
                </a>
              </div>
              <div className="text-slate-950 text-[16px]">
                <a
                  target="_blank"
                  href="https://icons8.com/icon/xEdMv_JYKwrc/earth-globe"
                  className="underline"
                >
                  Geography
                </a>{" "}
                icon by{" "}
                <a
                  target="_blank"
                  href="https://icons8.com"
                  className="underline"
                >
                  Icons8
                </a>
              </div>
              <div className="text-slate-950 text-[16px]">
                <a
                  target="_blank"
                  href="https://icons8.com/icon/Af8KJGZmMS9D/food-and-wine"
                  className="underline"
                >
                  Food And Wine
                </a>{" "}
                icon by{" "}
                <a
                  target="_blank"
                  href="https://icons8.com"
                  className="underline"
                >
                  Icons8
                </a>
              </div>
              <div className="text-slate-950 text-[16px]">
                <a
                  target="_blank"
                  href="https://icons8.com/icon/_HCd0OfJd3qi/knowledge-sharing"
                  className="underline"
                >
                  Knowledge Sharing
                </a>{" "}
                icon by{" "}
                <a
                  target="_blank"
                  href="https://icons8.com"
                  className="underline"
                >
                  Icons8
                </a>
              </div>
              <div className="text-slate-950 text-[16px]">
                Quiz Image by{" "}
                <a
                  className="underline"
                  href="https://www.freepik.com/free-vector/set-hand-drawn-questionnaire-elements_1035945.htm#query=test%20quiz&position=2&from_view=keyword&track=ais&uuid=b5e8b17d-925a-4353-97a8-3504c260fd64"
                >
                  Freepik
                </a>
              </div>
              <div className="text-slate-950 text-[16px]">
                Question Marks by{" "}
                <a 
                className="underline"
                href="https://www.freepik.com/free-vector/hand-drawn-question-mark-pattern_26539471.htm#page=8&query=quiz&position=21&from_view=keyword&track=sph&uuid=67cc8752-684e-423a-b63d-7836d36276a7">
                  Freepik
                </a>
              </div>
            </div>
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

import React from "react";
import Image from "next/image";
import Nav from "../reusable/Nav";
import Author from "@/public/Author.jpg";

const AboutPage = () => {
  return (
    <div className="lg:h-[100vh] h-auto w-full bg-mainCyan">
      <Nav />
      <div className="flex lg:flex-row flex-col-reverse w-full lg:h-[90vh] h-auto lg:justify-around items-center">
        <Image
          src={Author}
          alt=""
          className="lg:w-[40%] w-[80%] my-20 lg:mt-0 h-auto object-cover rounded-2xl lg:h-[70vh]"
        />
        <div className="lg:w-[40%] w-[90%] lg:mt-0 mt-20 bg-white h-auto rounded-2xl shadow-xl text-slate-950 flex flex-col lg:text-xl text-lg px-10 py-5">
          <p className="lg:text-2xl text-deepGreen mb-10 text-center">
            About Me
          </p>
          <p>
            My name is Dada Temiloluwa, a final year student of Cardiff
            Metropolitan University. My student ID is St20210859. This is my
            final year project.
          </p>
          <p className="lg:text-2xl text-deepGreen my-10 text-center">
            About Quizz
          </p>
          <p>
            The project is a quiz application in which users have to answer a
            set of questions within a broad range of categories including arts,
            science and much more. The questions are designed to be fun, while
            challenging enough to spark enough attention in users. A countdown before each round is over.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

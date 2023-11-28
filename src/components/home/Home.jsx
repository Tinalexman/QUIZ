import React from "react";

import Nav from "@/src/components/reusable/Nav";
import Banner from "./Banner";
import Footer from "@/src/components/reusable/Footer"

//<a href="https://www.flaticon.com/free-icons/quiz" title="quiz icons">Quiz icons created by Freepik - Flaticon</a>

const Home = () => {
  return (
    <div className="bg-white h-full">
      <Nav />
      <Banner />

      <Footer />
    </div>
  );
};

export default Home;

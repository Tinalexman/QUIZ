import React from "react";

import Nav from "../reusable/Nav";
import Banner from "./Banner";

//<a href="https://www.flaticon.com/free-icons/quiz" title="quiz icons">Quiz icons created by Freepik - Flaticon</a>

const Home = () => {
  return (
    <div className="bg-white h-[100vh]">
      <Nav />
      <Banner />
    </div>
  );
};

export default Home;

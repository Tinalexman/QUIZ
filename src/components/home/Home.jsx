import React from "react";

import Nav from "@/src/components/reusable/Nav";
import Banner from "./Banner";
import Footer from "@/src/components/reusable/Footer"
import Offers from "./Offers";
import Reason from "./Reason";

const Home = () => {
  return (
    <div className="bg-white sm:bg-mainCyan h-full">
      <Nav useCyan={true}/>
      <Banner />
      <Offers />
      <Reason />
      <Footer />
    </div>
  );
};

export default Home;

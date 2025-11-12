import React from "react";
import Hero from "../../Components/Hero/Hero";
import LatestCrops from "../../Components/LatestCrops/LatestCrops";
import HowItWorks from "../../Components/HowItWork/HowItWorks";
import AgroBlog from "../../Components/AgroBlog/AgroBlog";

const Home = () => {
  return (
    <div>
      {/* Hero section */}
      <Hero></Hero>
      {/* latest crops section */}
      <LatestCrops></LatestCrops>
      {/* How it Work Section */}
      <HowItWorks></HowItWorks>
      {/* Agro Blog Section */}
      <AgroBlog></AgroBlog>
      {/* 2 extra section */}
    </div>
  );
};

export default Home;

import React from "react";
import Hero from "../../Components/Hero/Hero";
import LatestCrops from "../../Components/LatestCrops/LatestCrops";
import HowItWorks from "../../Components/HowItWork/HowItWorks";

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

      {/* 2 extra section */}
    </div>
  );
};

export default Home;

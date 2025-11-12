import React from "react";
import Hero from "../../Components/Hero/Hero";
import LatestCrops from "../../Components/LatestCrops/LatestCrops";
import HowItWorks from "../../Components/HowItWork/HowItWorks";
import AgroBlog from "../../Components/AgroBlog/AgroBlog";
import JoinCommunity from "../../Components/JoinComunity/JoinCommunity";
import SuccesFarmers from "../../Components/SuccesFarmer/SuccesFarmers";

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
      {/* Succsefull farmers */}
      <SuccesFarmers></SuccesFarmers>
      {/*Join Community  section */}
      <JoinCommunity></JoinCommunity>
    </div>
  );
};

export default Home;

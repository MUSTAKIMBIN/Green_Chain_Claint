import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/farmers.jpg";
import img2 from "../../assets/frishCrops.jpg";
import img3 from "../../assets/vagitable.jpg";
import img4 from "../../assets/tomatos.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* --- Slide 1 --- */}
        <SwiperSlide>
          <div
            className="h-[60vh] flex items-center justify-center bg-center bg-cover relative text-white"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img1})`,
            }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-center drop-shadow-lg">
              Empowering Farmers, Connecting Consumers
            </h2>
          </div>
        </SwiperSlide>

        {/* --- Slide 2 --- */}
        <SwiperSlide>
          <div
            className="h-[60vh] flex items-center justify-center bg-center bg-cover relative text-white"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img2})`,
            }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-center drop-shadow-lg">
              Fresh Crops, Direct from the Field
            </h2>
          </div>
        </SwiperSlide>

        {/* --- Slide 3 --- */}
        <SwiperSlide>
          <div
            className="h-[60vh] flex items-center justify-center bg-center bg-cover relative text-white"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img3})`,
            }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-center drop-shadow-lg">
              Fresh Vegetables for Every Home
            </h2>
          </div>
        </SwiperSlide>

        {/* --- Slide 4 --- */}
        <SwiperSlide>
          <div
            className="h-[60vh] flex items-center justify-center bg-center bg-cover relative text-white"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img4})`,
            }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-center drop-shadow-lg">
              Healthy Food, Happy Life 🌾
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;

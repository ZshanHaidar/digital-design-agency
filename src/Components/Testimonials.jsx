import React from "react";
import smilingman from "../Assets/smiling-man.jpg";
import smilingwoman from "../Assets/smiling-woman.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonials = () => {
  return (
    <div className="bg-[#3a50f9]">
      <div className="max-w-[400px] sm:max-w-[500px] md:max-w-[700px] mx-auto py-16 bg-[#3a50f9] s-continer">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-full h-[700px] bg-white mx-auto">
              <div className="max-w-[500px] mx-auto pt-16">
                <div className="flex justify-center items-center py-10">
                  <div className="flex justify-center items-center bg-[#3a50f9] rounded-full w-[6.5rem] h-[6.5rem]">
                    <img
                      src={smilingman}
                      alt="/"
                      class="w-24 h-24 rounded-full object-cover"
                    />
                  </div>
                </div>
                <p className="py-4 mx-4 text-lg">
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Velit perspiciatis eaque quidem facere nihil hic, iure fuga
                  reprehenderit id vitae culpa sunt dolorem optio illo provident
                  consectetur officiis voluptatibus delectus."
                </p>
                <h1 className="text-center font-bold text-2xl py-4">
                  Sammuel Schick
                </h1>
                <p className="text-center">Presiden, CEO</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[700px] bg-white mx-auto">
              <div className="max-w-[500px] mx-auto pt-16">
                <div className="flex justify-center items-center py-10">
                  <div className="flex justify-center items-center bg-[#3a50f9] rounded-full w-[6.5rem] h-[6.5rem]">
                    <img
                      src={smilingwoman}
                      alt="/"
                      class="w-24 h-24 rounded-full object-cover"
                    />
                  </div>
                </div>
                <p className="py-4 mx-4 text-lg">
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Velit perspiciatis eaque quidem facere nihil hic, iure fuga
                  reprehenderit id vitae culpa sunt dolorem optio illo provident
                  consectetur officiis voluptatibus delectus."
                </p>
                <h1 className="text-center font-bold text-2xl py-4">
                  Jennie Roberts
                </h1>
                <p className="text-center">Top manager</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

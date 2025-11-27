import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    title: "PARTNERSHIP",
    content: `We are pleased to open up opportunities to collaborate in a sustainable and dedicated business, we are proud of the high-quality products we have directly from the Indonesian gardens.`,
  },
];

const GeraiSection = () => {
  return (
    <section className="relative w-full text-white">
      {/* Background */}
      <img className="absolute top-0 left-0 w-full h-full object-cover" src="/images/hantaraisue.jpg" alt="" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <div className="relative z-10 flex justify-center items-center py-32 px-4 md:px-12 max-w-7xl mx-auto">
        <Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 3000, disableOnInteraction: false }} className="w-full custom-swiper">
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/30 backdrop-blur-md text-gray-800 rounded-2xl p-8 max-w-4xl mx-auto relative">
                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4 text-center">{item.title}</h2>
                <p className="text-sm md:text-base leading-relaxed whitespace-pre-line text-center text-white">{item.content}</p>

                <div className="flex justify-center">
                  <button className="px-8 py-2 rounded-full border border-white text-white mt-4">
                    <a href="https://wa.me/6288809250032?text=Hello%20HANTARA%20%F0%9F%91%8B%0AI%20want%20to%20work%20with%20you" target="_blank" rel="noopener noreferrer" className="font-normal hover:underline text-[#234D32]">
                      More
                    </a>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GeraiSection;

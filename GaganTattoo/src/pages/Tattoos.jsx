import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Tattoos() {
  const tattoos = [
    { path: "/img/tattoos/1.jpg", type: "img" },
    { path: "/videos/1.mp4", type: "video" },
    { path: "/img/tattoos/2.jpg", type: "img" },
    { path: "/videos/2.mp4", type: "video" },
    { path: "/img/tattoos/3.jpg", type: "img" },
    { path: "/videos/3.mp4", type: "video" },
    { path: "/img/tattoos/4.jpg", type: "img" },
    { path: "/videos/4.mp4", type: "video" },
    { path: "/img/tattoos/5.jpg", type: "img" },
    { path: "/videos/5.mp4", type: "video" },
    { path: "/img/tattoos/6.jpg", type: "img" },
    { path: "/videos/6.mp4", type: "video" },
    { path: "/img/tattoos/7.jpg", type: "img" },
    { path: "/videos/7.mp4", type: "video" },
    { path: "/img/tattoos/8.jpg", type: "img" },
    { path: "/videos/8.mp4", type: "video" },
    { path: "/img/tattoos/9.jpg", type: "img" },
    { path: "/videos/9.mp4", type: "video" },
    { path: "/img/tattoos/10.jpg", type: "img" },
    { path: "/videos/10.mp4", type: "video" },
    { path: "/videos/11.mp4", type: "video" },
    { path: "/videos/12.mp4", type: "video" },
    { path: "/videos/13.mp4", type: "video" },
    { path: "/videos/14.mp4", type: "video" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-[7px] z-[999]">
        <Navbar />
      </div>
      <div className="h-screen bg-[url('/img/tattoobg.png')] bg-cover bg-center flex justify-center items-center">
        <div className="h-[550px] w-3/4 mt-[60px] bg-[#04010197]">
          <Slider {...settings}>
            {tattoos.map((item, index) => (
              <div
                key={index}
                className="px-20 pt-5 flex justify-center items-center"
              >
                {item.type === "img" ? (
                  <img
                    src={item.path}
                    alt="Tattoo"
                    className="h-[240px] w-[200px] rounded-2xl object-cover"
                    loading="lazy"
                  />
                ) : (
                  <video
                    src={item.path}
                    autoPlay
                    loop
                    playsInline
                    muted
                    controls
                    className="h-[240px] w-[200px] rounded-2xl object-cover"
                  />
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Footer />
    </div>
  );
}

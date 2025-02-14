import React, { useRef } from "react";
import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
import Footer from "../Components/Footer";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Artist() {
  const tattoos = [
    { path: "/img/tattoos/1.jpg", type: "img" },
    { path: "/videos/1.mp4", type: "video" },
    { path: "/img/tattoos/2.jpg", type: "img" },
    { path: "/videos/2.mp4", type: "video" },
    { path: "/img/tattoos/5.jpg", type: "img" },
    { path: "/img/tattoos/6.jpg", type: "img" },
    { path: "/videos/3.mp4", type: "video" },
    { path: "/img/tattoos/7.jpg", type: "img" },
  ];

  const artists = [
    {
      name: "Gagan Thapa",
      image: "/img/artist/Gagan.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel debitis qui consequatur sequi blanditiis, nesciunt laboriosam maxime atque perspiciatis.",
    },
    {
      name: "Arjun Thapa",
      image: "/img/artist/Arjun.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel debitis qui consequatur sequi blanditiis, nesciunt laboriosam maxime atque perspiciatis.",
    },
    {
      name: "Jivan Thapa",
      image: "/img/artist/Jivan.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel debitis qui consequatur sequi blanditiis, nesciunt laboriosam maxime atque perspiciatis.",
    },
  ];

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md z-[999]">
        <Navbar />
      </div>

      {/* Artist Slider */}
      <div className="h-screen bg-[url('/img/blackbg.jpg')] bg-cover bg-center flex justify-center items-center">
        <div className="w-[60%] mt-15">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {artists.map((artist, index) => (
              <div key={index} className="h-[550px]">
                <div className="flex justify-center space-x-10 pt-15 ">
                  <img
                    src={artist.image}
                    className="h-[355px] w-[290px] rounded-4xl"
                    alt={artist.name}
                  />
                  <div className="w-[50%]">
                    <h1 className="text-4xl font-bold mb-8">{artist.name}</h1>
                    <p className="text-2xl">{artist.description}</p>
                    <Button className="mt-9" title="Book an appointment" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="h-screen bg-[url('/img/blackbg.jpg')] bg-cover bg-center flex justify-center ">
        <div className="w-[75%] h-[88vh] border-2 rounded-4xl flex flex-col items-center px-10 py-5">
          <h1 className="text-4xl font-bold">Portfolio</h1>
          <div className="flex flex-wrap justify-center p-5 gap-6">
            {tattoos.map((item, index) => (
              <div key={index}>
                {item.type === "img" ? (
                  <img
                    src={item.path}
                    alt="Tattoo"
                    className="h-[240px] w-[200px] rounded-2xl"
                  />
                ) : (
                  <video
                    src={item.path}
                    autoPlay
                    loop
                    playsInline
                    muted
                    className="h-[240px] w-[200px] rounded-2xl object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

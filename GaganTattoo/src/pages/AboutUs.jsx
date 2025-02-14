import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function AboutUs() {
  const artistImage = [
    { src: "/img/artist/Arjun.jpg", name: "Gagan Thapa" },
    { src: "/img/artist/Gagan.jpg", name: "Gagan Thapa" },
    { src: "/img/artist/Jivan.jpg", name: "Jivan Gurung" },
  ];
  return (
    <div className="bg-[url('/img/aboutbg.jpg')] bg-cover bg-center bg-fixed">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-[7px] z-50">
        <Navbar />
      </div>

      {/* Page 1 */}
      <div className="h-[100vh] flex flex-col text-white">
        <div className="h-[47%] mt-[6%] flex items-center">
          <div className="flex flex-col mx-[15%] w-[70%] text-center ">
            <h1 className="text-3xl font-bold">About Us</h1>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              dicta doloremque iure ad, modi labore amet quo, dolorum vel
              voluptas sequi officia eum. Voluptate ratione iste doloribus
              voluptas sequi officia eum. Voluptate ratione iste doloribus
              voluptas sequi officia eum. Voluptate ratione iste doloribus
              voluptas sequi officia eum. Voluptate ratione iste doloribus
              placeat, odit repudiandae. Asperiores?
            </p>
          </div>
        </div>
        <div className="h-[47%] flex items-center bg-[#2a284b91]">
          <div className="flex justify-center mx-[10%] space-x-[150px] w-[80%]">
            <div className="w-[50%] ">
              <h1 className="text-3xl font-bold">MISSION</h1>
              <p className="mt-5 w-[70%] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                dicta doloremque iure ad, modi labore amet quo, dolorum vel
                dicta doloremque iure ad, modi labore amet quo, dolorum vel
              </p>
            </div>
            <div className="flex items-center ">
              <img src="/img/logo2.png" className="h-[120px]" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Page 2 - Fixed Background, Content with Contrast */}
      <div className="h-[100vh] flex flex-col text-white">
        <div className="h-[47%] flex items-center bg-[#3b863079]">
          <div className="flex mx-[10%] w-[80%]">
            <div className="w-[50%] flex justify-center items-center ">
              <img src="/img/logo2.png" className="h-[120px]" alt="" />
            </div>
            <div className=" w-[50%] pl-[100px]">
              <h1 className="text-3xl font-bold">VISION</h1>
              <p className="mt-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                dicta doloremque iure ad, modi labore amet quo, dolorum vel
                dicta doloremque iure ad, modi labore amet quo, dolorum vel
              </p>
            </div>
          </div>
        </div>
        <div className="h-[53%] flex items-center bg-[#329aa891]">
          <div className="flex justify-center mx-[10%] space-x-[150px] w-[80%]  ">
            <div className="w-[50%] ">
              <h1 className="text-3xl font-bold">CORE VALUES</h1>
              <p className="mt-5 w-[70%] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                dicta doloremque iure ad, modi labore amet quo, dolorum vel
                dicta doloremque iure ad, modi labore amet quo, dolorum vel
              </p>
            </div>
            <div className="flex items-center ">
              <img src="/img/logo2.png" className="h-[120px]" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* PAGE 3 */}
      <div className="bg-[#2a2a2a5a] h-[100vh]">
        <h1 className="h-[90px] text-5xl flex justify-center items-center">
          Meet Our Artists
        </h1>

        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center space-x-10 h-[500px] w-[80%] border-4 rounded-2xl bg-[#3e3e3e49]">
            {artistImage.map((image, index) => (
              <div key={index}>
                <img
                  className="h-85 rounded-xl"
                  src={image.src}
                  alt={image.name}
                />
                <div className="flex justify-center items-center">
                  <p className="text-4xl">{image.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

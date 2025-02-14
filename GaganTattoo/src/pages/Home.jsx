import React from "react";
import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Home() {
  const artistImage = [
    { src: "/img/artist/Arjun.jpg", name: "Gagan Thapa" },
    { src: "/img/artist/Gagan.jpg", name: "Gagan Thapa" },
    { src: "/img/artist/Jivan.jpg", name: "Jivan Gurung" },
  ];
  return (
    <div>
      <div className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-[7px] z-999">
        <Navbar />
      </div>
      {/* top page */}
      <div className="h-screen bg-[url('/img/homebg.jpg')] bg-cover bg-center">
        <div className="flex flex-col space-x-7  w-170 relative">
          <div className="absolute top-45 left-50">
            <p className="text-9xl font-bold">GAGAN</p>
            <p className="text-6xl font-bold">Tattoo Studio</p>
            <p className="text-xl">
              Ready to design, develop and tattoo your first or next tattoo.
            </p>
            <div className="mt-10">
              <Link to={"/contact"}>
                <Button title="Book and appointment" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* artist page */}
      <div className="bg-[#2a2a2a] h-[100vh]">
        <h1 className="h-[90px] text-5xl flex justify-center items-center">
          Meet Our Artists
        </h1>

        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center space-x-10 h-[500px] w-[80%] border-4 rounded-2xl bg-[#3e3e3e]">
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

      {/* Join our team */}
      <div className="h-screen bg-[url('/img/blackbg.jpg')] bg-cover bg-center flex justify-center items-center">
        <div className=" w-[80%] border-3 rounded-3xl flex p-14">
          <img src="/img/Group.jpg" className="w-[450px] rounded-2xl" alt="" />
          <div className="px-16">
            <h1 className="text-4xl flex ">Join our team</h1>
            <p className="py-5 text-2xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
              aperiam incidunt, sapiente eligendi autem beatae quis doloribus
              voluptates reprehenderit ipsum veniam saepe sunt maiores enim
              possimus temporibus libero molestiae distinctio ullam qui labore
              nostrum. Fuga, vitae sequi? Ratione deleniti accusamus tempore
              nesciunt neque excepturi! Amet totam sed accusantium vero aut?
            </p>
            <Button title="Send a request" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

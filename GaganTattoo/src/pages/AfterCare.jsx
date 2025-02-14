import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../Components/Button";

export default function AfterCare() {
  const [username, setUsername] = useState("");

  function handleEvent(e) {
    e.preventDefault();
    console.log(username);
    setUsername("");
  }

  return (
    <div>
      <div className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-[7px] z-999">
        <Navbar />
      </div>
      <div className="h-screen bg-[url('/img/aftercarebg.jpg')] bg-cover bg-center flex justify-center items-center">
        <div className=" w-[75%]  bg-transparent backdrop-blur-[7px] h-[550px] flex flex-col">
          <form className="flex flex-col">
            <h1 className="font-bold">Form</h1>
            <input
              name="Username"
              type="text"
              fieldName="first_name"
              className="border-4 text-red-600"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={(e) => handleEvent(e)}>Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

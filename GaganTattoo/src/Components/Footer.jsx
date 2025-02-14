import React from "react";
import { BiLogoInstagram } from "react-icons/bi";
import { CiFacebook } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <>
      <div className="bg-[#343434] h-[30vh]">
        <div className=" flex w-[80%] m-auto justify-around pt-5">
          {/* about */}
          <div className=" flex flex-col space-x-10 w-[40%]">
            <h1 className="text-xl font-bold">About Us</h1>
            <p className="pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. sapiente
              corrupti ullam ipsum est commodi, sunt excepturi. Itaque dolorem
              vel rerum iusto error!
            </p>
            <ul className="flex">
              <li>
                <BiLogoInstagram />
              </li>
              <li>
                <CiFacebook />
              </li>
              <li>
                <FiYoutube />
              </li>
            </ul>
          </div>
          {/* secition2 */}
          <div>
            <h1 className="text-xl">Support</h1>
            <ul className="pl-2 pt-3">
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Help</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl ">Quick Links</h1>
            <ul className="pl-2 pt-3">
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl">Contact Us</h1>
            <ul className="pl-2 pt-3">
              <li>61 9999999</li>
              <li>gagantattooin@yahoo.com</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center pt-1 gap-8">
          <img src="/img/logo.png" alt="logo" className="h-[50px]" />
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { name: "Artist", path: "/artist" },
    { name: "Aftercare", path: "/aftercare" },
    { name: "Contact Us", path: "/contact" },
    { name: "About Us", path: "/about" },
    { name: "Tattoos", path: "/tattoos" },
  ];
  return (
    <>
      <div className="flex justify-between items-center bg-transparant px-35 py-2 ">
        <Link to={"/"}>
          <img className="h-18" src="/img/logo.png" alt="logo" />
        </Link>
        <div>
          <ul className="flex gap-10 font-bold text-xl">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path}>
                <li
                  className={
                    location.pathname == link.path
                      ? "text-[#d01e0ed0]"
                      : "text-xl"
                  }
                >
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

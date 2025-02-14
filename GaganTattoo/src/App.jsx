import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Artist from "./pages/Artist";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import AfterCare from "./pages/AfterCare";
import Tattoos from "./pages/Tattoos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/aftercare" element={<AfterCare />} />
          <Route path="/tattoos" element={<Tattoos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

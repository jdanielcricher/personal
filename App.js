import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Writing from "./components/Writing";
import Podcast from "./components/Podcast";
import GiftEconomy from "./components/GiftEconomy";
import Contact from "./components/Contact";
import "./styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/gift-economy" element={<GiftEconomy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

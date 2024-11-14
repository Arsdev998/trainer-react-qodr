import React, { useContext, useState } from "react";
import img from "../assets/img.jpeg";
import Component from "../components/organism/Component";
import { DarkMode } from "../context/DarkMode";
const Home = () => {
  const { darkMode } = useContext(DarkMode);
  return (
    <div
      className={`flex items-center  flex-col min-h-screen ${
        darkMode ? "bg-black " : ""
      }`}
    >
      <div
        className={`w-[300px] ${
          darkMode ? "bg-black text-white" : ""
        }`}
      >
        <h1>Hitam Dari USe C0ntext</h1>
        iure voluptatem illo eos ea architecto obcaecati aliquid? Ullam,
        necessitatibus? Dolor unde libero velit harum. Voluptates excepturi quo
        incidunt vel numquam!
      </div>
      <div className="flex justify-around items-center">
        <img src={img} alt="" className="w-[400px] h-[400px]" />
        <div className={`w-[400px] p-2 ${darkMode ? "bg-black" : ""}`}>
          <p className={`${darkMode ? "text-white" : "text-black"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            possimus voluptatem, ex, consectetur perferendis nemo ea aliquid
            repellendus deleniti obcaecati quasi veniam reiciendis nisi ipsa
            voluptas aspernatur, laboriosam quis aut!
          </p>
        </div>
      </div>
      <Component />
    </div>
  );
};

export default Home;

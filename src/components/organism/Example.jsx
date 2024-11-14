import React, { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

function Example() {
    const {darkMode} = useContext(DarkMode)
  return (
    <div
      className={`flex flex-col justify-center items-center  h-[400px] w-[500px] ${
        darkMode ? "bg-black text-white" : "bg-white"
      }`}
    >
      <h1 className="text-3xl">Apa Iya ini bakal jadi dark???</h1>
    </div>
  );
}

export default Example;

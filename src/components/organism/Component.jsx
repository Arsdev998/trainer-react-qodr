import React, { useContext } from "react";
import putih from "../../assets/images.jpg";
import hitam from "../../assets/rusdi.jpg";
import { DarkMode } from "../../context/DarkMode";

const Component = () => {
    const {darkMode} = useContext(DarkMode)
  return (
    <div className={`w-[500px] flex mx-auto ${darkMode ? "bg-black" : ""}`}>
      {darkMode ? (
        <div className="flex items-center gap-3">
          <img src={hitam} alt="" />
          <p className="text-white">Ini Mas Rusdi</p>
        </div>
      ) : (
        <div className="text-black flex items-center gap-3">
          <img src={putih} />
          <p>Ini Mas Putih</p>
        </div>
      )}
    </div>
  );
};

export default Component;

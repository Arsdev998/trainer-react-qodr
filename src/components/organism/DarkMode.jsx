import React, { useContext } from "react";
import Button from "./Button";
import { DarkMode } from "../../context/DarkMode";

function SetDarkMode() {
  const { darkMode, setDarkMode } = useContext(DarkMode);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Putihkan" : "Hitamkan"}
    </button>
  );
}

export default SetDarkMode;

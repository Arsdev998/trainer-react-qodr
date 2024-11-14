import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
import SetDarkMode from "../organism/DarkMode";
import { useContext } from "react";

export default function Header() {
  const { darkMode } = useContext(DarkMode);
  return (
    <header
      className={`flex justify-around items-center h-30 border-b-2 p-3 ${
        darkMode ? "bg-black text-white" : "bg-white"
      }`}
    >
      <h1>Header Nih Bro</h1>
      <SetDarkMode />
      <nav>
        <ul className="flex gap-x-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={"/product"}>Product</Link>
          </li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

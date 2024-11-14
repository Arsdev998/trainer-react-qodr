import { useContext, useState } from "react";
import Button from "./components/organism/Button";
import Example from "./components/organism/Example";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import img from "./assets/img.jpeg";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

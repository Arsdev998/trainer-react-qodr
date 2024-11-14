import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DarkModeContextProvider from "./context/DarkMode.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Product from "./pages/Prouct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home/>
      },{
        path:"/product",
        element:<Product/>
      },
      {
        path: "*",
        element: <Home/>,
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeContextProvider>
      <RouterProvider router={router}/>
    </DarkModeContextProvider>
  </StrictMode>
);

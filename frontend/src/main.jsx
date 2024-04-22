import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar/index.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [

    // ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
// import App from "./App";
// layout
import Landing from "./Pages/Landing/Landing";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import ShipperCreateAd from './Pages/Shipper/ShipperCreateAd'
import ShipperHome from './Pages/Shipper/ShipperHome'
import SignUpShipper from "./Pages/SignUpShipper/SignUpShipper";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/shippercreatead",
    element: <ShipperCreateAd/>,
  },
  {
    path: "/shipperhome",
    element: <ShipperHome/>,
  },
  {
    path: "/signupshipper",
    element: <SignUpShipper/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
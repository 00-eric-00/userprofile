import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Botnav from "./views/botnav";
import Sidenav from "./views/Sidenav";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="flex">
      <Sidenav />
      <Botnav />
    </div>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Sidenav from "./views/Sidenav";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="flex">
      <Sidenav />
    </div>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import GoogleMaps from "./components/Maps";
import GoogleMaps from "./components/Maps";

ReactDOM.render(
  <React.StrictMode>
    <GoogleMaps />
  </React.StrictMode>,
  document.getElementById("root")
);

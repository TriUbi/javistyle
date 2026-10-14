import React from "react";
import { createRoot } from "react-dom/client";
import Servicios from "./Servicios.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode><Servicios /></React.StrictMode>
);

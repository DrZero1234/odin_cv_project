import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import "./fonts/TT/OldStandardTT-Regular.ttf";
import "./fonts/TT/OldStandardTT-Bold.ttf";

import "./fonts/Cantarell/Cantarell-Regular.ttf";
import "./fonts/Cantarell/Cantarell-Bold.ttf";

import "./fonts/Roboto/Roboto-Regular.ttf";
import "./fonts/Roboto/Roboto-Bold.ttf";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

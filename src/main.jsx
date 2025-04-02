import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Gallery from "./Gallery.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="gallery" element={<Gallery />} />
    </Routes>
  </BrowserRouter>,
);

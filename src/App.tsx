import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPageUdin from "./LandingPageUdin/Pages";
import HeroTwo from "./LandingPageUdin/Pages/hero2";
import HeroThree from "./LandingPageUdin/Pages/hero3";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageUdin />} />
        <Route path="/lapas" element={<HeroTwo />} />
        <Route path="/bgn" element={<HeroThree />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from "react";
import Home from "./Components/Home";
import Projects from "./Components/Projects/Projects";
import AboutMe from "./Components/AboutMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route>
          <Route path="/Projects" element={<Projects />} />
          <Route path="/AboutMe" element={<AboutMe />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

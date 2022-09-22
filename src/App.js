import React from "react";
import Home from "./Components/Home";
import Projects from "./Components/Projects Page/Projects";
import AboutMe from "./Components/AboutMe";
import GetInTouch from "./Components/GetInTouch";
import Resume from "./Components/Resume";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route>
          <Route path="/Projects" element={<Projects />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/GetInTouch" element={<GetInTouch />} />
          <Route path="/GetInTouch" element={<GetInTouch />} />
          <Route path="/Resume" element={<Resume />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

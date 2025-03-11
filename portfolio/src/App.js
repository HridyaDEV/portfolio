import React from "react";

import Navbar from "./components/Navbar";
import Brief from "./components/Brief";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Education from "./components/Education";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Header */}
      <Navbar />






      <Brief />

      {/* About Section */}
      <About />

      <Education/>

      <Skills/>

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contacts />

    </div>
  );
};

export default App;

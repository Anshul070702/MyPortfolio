import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="h-auto">
        <Navbar />
        <hr />
        <Home />
        <hr />
        <About />
        <hr />
        <Projects />
        <hr />
        <Skills />
        <hr />
        <Contact />
        <hr />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;

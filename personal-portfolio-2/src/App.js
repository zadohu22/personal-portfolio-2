import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div className='w-full h-full'>
      <Nav />
      <Hero />
      <Slider />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;

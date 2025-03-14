import React, { useState, useEffect } from "react";
import AnimatedSplash from "./components/AnimatedSplash";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  const callBack =(delay)=>{
    setTimeout(() => {
      setShowSplash(false);
    }, delay);
  }
  const FrontSide = () => (
    <div className="flex flex-col items-center">
  
      <h2 className="text-xl font-semibold">React Developer</h2>
    </div>
  );
  
  const BackSide = () => (
    <div className="text-center">
      <p className="text-lg px-4">Building modern UIs with React.js</p>
    </div>
  );
  return (
    <>
      {showSplash && <AnimatedSplash  callBack={callBack}/>}
      <div 
        style={{ opacity: showSplash ? 0 : 1, transition: 'opacity 0.5s' }}
        className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900"
      >
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

        <main className="font-light text-white antialiased selection:bg-lime-300 selection:text-black">
          <Navbar />
          <Hero />
          <Technologies />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
};

export default App;
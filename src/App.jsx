import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Toast,
  Planet,
  Footer,
} from "./components";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add loading class to body
    document.body.classList.add("loading");

    const timer = setTimeout(() => {
      setLoading(false); // hide the loader after 3 seconds
      document.body.classList.remove("loading"); // Remove the loading class
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("loading"); // cleanup
    };
  }, []);

  return (
    <BrowserRouter>
      <div
        className={`relative z-0 bg-primary ${
          loading ? "cursor-none" : "cursor-auto"
        }`}
      >
        {loading && (
          // Show the Planet loader while loading is true
          <div className="fixed inset-0 z-50 flex justify-center items-center bg-primary">
            <Planet />
          </div>
        )}

        {/* Main content that is hidden during loading */}
        <div
          className={`${
            loading ? "opacity-0" : "opacity-100"
          } transition-opacity duration-500`}
        >
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
            <Toast />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

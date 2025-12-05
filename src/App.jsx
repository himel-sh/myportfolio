import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      id="top"
      className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200"
    >
      <Header toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

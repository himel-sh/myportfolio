import { motion } from "framer-motion";
import { Sun, Moon, Download } from "lucide-react";
import { useState, useEffect } from "react";

function Header({ toggleDarkMode }) {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleToggle = () => {
    setIsDark(!isDark);
    toggleDarkMode();
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Check if we're at the very top (Hero section)
      const aboutSection = document.getElementById("about");
      if (aboutSection && scrollPosition < aboutSection.offsetTop - 100) {
        setActiveSection("home");
        return;
      }

      // Check other sections
      const sections = ["about", "education", "skills", "work", "contact"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    handleScroll(); // Run on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Education", "Skills", "Work", "Contact"];

  return (
    <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-6"
        >
          <nav className="flex justify-between items-center">
            <motion.a
              href="#top"
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer"
            >
              &lt;SHH /&gt;
            </motion.a>
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => {
                const sectionId = item.toLowerCase();
                const isActive = activeSection === sectionId;

                return (
                  <motion.a
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className={`font-medium transition-colors ${
                      isActive
                        ? "text-primary dark:text-primary"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                    }`}
                    href={item === "Home" ? "#top" : `#${sectionId}`}
                  >
                    {item}
                  </motion.a>
                );
              })}
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle dark mode"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                onClick={handleToggle}
              >
                {isDark ? <Sun size={24} /> : <Moon size={24} />}
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 text-white dark:bg-gray-200 dark:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-gray-800 dark:hover:bg-white transition-colors flex items-center gap-2"
                href="#"
              >
                <Download size={16} />
                Download CV
              </motion.a>
            </div>
          </nav>
        </motion.header>
      </div>
    </div>
  );
}

export default Header;

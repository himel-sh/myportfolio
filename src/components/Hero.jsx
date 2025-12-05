import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MapPin, Github, Linkedin, Facebook } from "lucide-react";

function Hero() {
  const imageRef = useRef(null);
  const shadowRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(imageRef.current, {
      y: -10,
      duration: 2,
      ease: "power1.inOut",
    });
    tl.to(
      shadowRef.current,
      {
        scale: 0.95,
        opacity: 0.7,
        duration: 2,
        ease: "power1.inOut",
      },
      0
    );
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <main className="mt-16 mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-primary/20 rounded-2xl shadow-lg p-8 md:p-12 lg:p-16 border border-primary/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h1 className="text-5xl md:text-6xl font-bold text-dark dark:text-light tracking-tight leading-tight">
                  Hi, I'm Himel
                  <span className="inline-block animate-wave">👋</span>
                </h1>
              </motion.div>
              <motion.p
                variants={itemVariants}
                className="text-lg text-dark/80 dark:text-accent/90 leading-relaxed"
              >
                I'm a MERN stack developer (React.js & Node.js) with a focus on
                creating (and occasionally designing) exceptional digital
                experiences that are fast, accessible, visually appealing, and
                responsive. Even though I've only recently begun creating web
                applications, I enjoy it more each day.
              </motion.p>
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center space-x-3 text-dark/80 dark:text-accent/90">
                  <MapPin
                    className="text-primary dark:text-primary"
                    size={20}
                  />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center space-x-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-3 h-3 rounded-full bg-primary"
                  />
                  <span className="text-dark/80 dark:text-accent/90">
                    Available for new projects
                  </span>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-4 pt-4"
              >
                {[
                  {
                    Icon: Github,
                    label: "GitHub",
                    url: "https://github.com/himel-sh",
                  },
                  {
                    Icon: Linkedin,
                    label: "LinkedIn",
                    url: "https://www.linkedin.com/in/sh-himel/",
                  },
                  {
                    Icon: Facebook,
                    label: "Facebook",
                    url: "https://www.facebook.com/sh.himel.790577/",
                  },
                ].map(({ Icon, label, url }) => (
                  <motion.a
                    key={label}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`${label} Profile`}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary dark:text-primary hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex justify-center items-center"
            >
              <div className="relative w-80 h-96">
                <div
                  ref={shadowRef}
                  className="absolute inset-0 bg-accent/20 dark:bg-primary/10 rounded-lg transform -translate-x-3 translate-y-3"
                />
                <img
                  ref={imageRef}
                  alt="Shahriar Hasan profile photo"
                  className="relative w-full h-full object-cover rounded-lg shadow-lg"
                  src="/images.png"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default Hero;

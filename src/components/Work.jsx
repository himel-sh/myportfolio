import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

function Work() {
  const projects = [
    {
      title: "Home Hero",
      description: `A full-stack service marketplace where users can browse services by category (plumbing, cleaning, repairs, etc.) and book services and also provide them. This is a MERN stack project.
`,
      images: [
        "https://i.ibb.co.com/d47QfPGn/Home-Hero1.png",
        "https://i.ibb.co.com/WdSQm9n/Home-Hero2.png",
      ],
      liveUrl: "https://home-hero-client.web.app/",
      codeUrl: "https://github.com/himel-sh/home-hero-client.git",
      tags: [
        "React",
        "Mongodb",
        "Firebase",
        "Node.js",
        "Express.js",
        "Tailwindcss",
        "Figma",

        "Git",
      ],
      reverse: false,
    },
    {
      title: "Quick Cart",
      description: `A full-stack e-commerce application with secure authentication, product management, and dynamic shopping features.
`,
      images: [
        "https://i.ibb.co.com/YJrnzNg/Quick-Cart1.png",
        "https://i.ibb.co.com/dR35YDW/Quick-Cart2.png",
      ],
      liveUrl: "https://quick-cart-mu-hazel.vercel.app/",
      codeUrl: "https://github.com/himel-sh/QuickCart.git",
      tags: [
        "React",
        "Next.js",
        "Typescript",
        "Mongoose",
        "API Routes",
        "Clerk",
        "Inngest",
        "Tailwindcss",
        "Figma",

        "Git",
      ],
      reverse: true,
    },
    {
      title: "Play Sync",
      description: `A gaming showcase platform where users can browse indie games for free and install them from their official sites. This is a static website project.
`,
      images: [
        "https://i.ibb.co.com/zh4K7Hpy/Play-Sync1.png",
        "https://i.ibb.co.com/NnrfqGB5/Play-Sync2.png",
      ],
      liveUrl: "https://playsync-gamehub.web.app/",
      codeUrl: "https://github.com/himel-sh/playsync.git",
      tags: ["React", "Firebase", "Tailwindcss", "Figma", "Git"],
      reverse: false,
    },
  ];

  return (
    <section
      id="work"
      className="bg-background-light dark:bg-background-dark font-display"
    >
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm font-medium px-4 py-1.5 rounded-full">
              Work
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Some of the noteworthy projects I have built
            </h2>
          </motion.div>
          <div className="mt-16 space-y-16 lg:space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 lg:p-12"
              >
                {/* Images Section */}
                <div
                  className={`space-y-4 ${project.reverse ? "lg:order-2" : ""}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 overflow-hidden"
                  >
                    <img
                      alt={`${project.title} screenshot 1`}
                      className="rounded-md w-full h-auto object-cover"
                      src={project.images[0]}
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 overflow-hidden"
                  >
                    <img
                      alt={`${project.title} screenshot 2`}
                      className="rounded-md w-full h-auto object-cover"
                      src={project.images[1]}
                    />
                  </motion.div>
                </div>

                {/* Content Section */}
                <div
                  className={`flex flex-col ${
                    project.reverse ? "lg:order-1" : ""
                  }`}
                >
                  <motion.h3
                    initial={{ opacity: 0, x: project.reverse ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl font-bold text-gray-900 dark:text-white"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed"
                  >
                    {project.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-6 flex flex-wrap gap-2"
                  >
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-full px-3 py-1 text-sm font-medium"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                  <div className="mt-6 flex items-center gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200 flex items-center gap-2"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                      <span className="font-medium">View Project</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200 flex items-center gap-2"
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                      <span className="font-medium">View Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default Work;

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiFigma,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiGit,
} from "react-icons/si";
import { Route, Code } from "lucide-react";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", Icon: SiHtml5, color: "text-orange-600" },
        { name: "CSS", Icon: SiCss3, color: "text-blue-600" },
        { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-500" },
        { name: "React", Icon: SiReact, color: "text-cyan-500" },
        {
          name: "Next.js",
          Icon: SiNextdotjs,
          color: "text-gray-900 dark:text-white",
        },
        { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-cyan-400" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", Icon: SiNodedotjs, color: "text-green-600" },
        {
          name: "Express.js",
          Icon: SiExpress,
          color: "text-gray-700 dark:text-gray-300",
        },
        { name: "MongoDB", Icon: SiMongodb, color: "text-green-500" },
        { name: "Firebase", Icon: SiFirebase, color: "text-yellow-600" },
        { name: "API Routes", Icon: Route, color: "text-purple-500" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", Icon: SiGit, color: "text-gray-900 dark:text-white" },
        {
          name: "GitHub",
          Icon: SiGithub,
          color: "text-gray-900 dark:text-white",
        },
        { name: "VS Code", Icon: Code, color: "text-blue-500" },
        { name: "Figma", Icon: SiFigma, color: "text-purple-500" },
        {
          name: "Vercel",
          Icon: SiVercel,
          color: "text-gray-900 dark:text-white",
        },
        { name: "Netlify", Icon: SiNetlify, color: "text-teal-500" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="bg-background-light dark:bg-background-dark font-sans antialiased"
    >
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm font-medium px-4 py-1.5 rounded-full">
              Skills
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              The skills, tools and technologies I am really good at
            </h2>
          </motion.div>

          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                  {category.title}
                </h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center"
                >
                  {category.skills.map((skill) => {
                    const IconComponent = skill.Icon;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="flex flex-col items-center space-y-3 cursor-pointer"
                      >
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                          className={`p-4 bg-gray-100 dark:bg-gray-800 rounded-xl ${skill.color}`}
                        >
                          <IconComponent size={48} />
                        </motion.div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm font-medium text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default Skills;

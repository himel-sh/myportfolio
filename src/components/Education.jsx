import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

function Education() {
  const education = [
    {
      degree: "Diploma in Engineering (Civil)",
      institution:
        "Ahsanullah Institute of Technical and Vocational Education and Training",
      year: "Completed in 2023",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Uttara High School and College",
      year: "Completed in 2018",
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="education"
      className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-300 antialiased"
    >
      <div className="min-h-screen flex items-center justify-center p-4">
        <main className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm font-medium px-4 py-1.5 rounded-full">
              Education
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              My Educational Background
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="space-y-8"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border-l-4 border-primary"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 bg-primary/10 rounded-lg"
                  >
                    <GraduationCap
                      className="text-primary"
                      size={32}
                      strokeWidth={2}
                    />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-3">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500">
                      <Calendar size={18} />
                      <span className="text-sm font-medium">{edu.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </main>
      </div>
    </section>
  );
}

export default Education;

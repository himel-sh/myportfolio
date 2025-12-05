import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-300 antialiased"
    >
      <div className="min-h-screen flex items-center justify-center p-4">
        <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-accent/20 dark:bg-secondary/10 text-dark/80 dark:text-light/85 text-sm font-medium px-4 py-1.5 rounded-full">
              About me
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-dark dark:text-light">
              Get to Know Me
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none text-dark/80 dark:text-light/85 space-y-6">
              <p>
                I'm a passionate{" "}
                <span className="text-primary">self-proclaimed developer</span>{" "}
                who specializes in full stack development (React.js & Node.js).
                I am very enthusiastic about bringing the technical and visual
                aspects of digital products to life. User experience, pixel
                perfect design, and writing clear, readable, highly performant
                code matters to me.
              </p>
              <p>
                I began my journey as a web developer quite recently in June
                2025, and since then, I've continued to grow and evolve as a
                developer, taking on new challenges and learning the latest
                technologies along the way. I'm currently building modern web
                applications using technologies such as Next.js, JavaScript,
                MongoDB, and much more. I am also learning and exploring new
                tools such as TypeScript and looking to implement them in real
                projects soon.
              </p>
              <p>
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
            </div>
          </motion.div>
        </main>
      </div>
    </section>
  );
}

export default About;

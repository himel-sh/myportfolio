import { motion } from "framer-motion";
import { Mail, Phone, Copy, Github, Linkedin, Facebook } from "lucide-react";
import { useState } from "react";

function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="bg-background-light dark:bg-background-dark font-display flex items-center justify-center min-h-screen"
    >
      <div className="text-center p-8 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-accent/20 dark:bg-secondary/10 text-dark/80 dark:text-light/85 text-sm font-medium px-4 py-1.5 rounded-full">
            Get in touch
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-dark dark:text-light">
            What's next? Feel free to reach out to me
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            If you're looking for a developer, have a query, or simply want to
            connect.
          </p>
        </motion.div>
        <div className="space-y-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center space-x-4"
          >
            <Mail className="text-slate-500 dark:text-slate-400" size={24} />
            <a
              href="mailto:shahriarhasan221@gmail.com"
              className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 hover:text-primary dark:hover:text-primary transition-colors"
            >
              shahriarhasan221@gmail.com
            </a>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                copyToClipboard("shahriarhasan221@gmail.com", "email")
              }
              className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
            >
              {copiedEmail ? (
                <span className="text-green-500 text-sm">Copied!</span>
              ) : (
                <Copy size={20} />
              )}
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center space-x-4"
          >
            <Phone className="text-slate-500 dark:text-slate-400" size={24} />
            <a
              href="https://wa.me/8801623552496"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              +880 1623 552496
            </a>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => copyToClipboard("+8801623552496", "phone")}
              className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
            >
              {copiedPhone ? (
                <span className="text-green-500 text-sm">Copied!</span>
              ) : (
                <Copy size={20} />
              )}
            </motion.button>
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
          className="text-slate-500 dark:text-slate-400 mb-6 text-sm"
        >
          You may also find me on these platforms!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5 }}
          className="flex justify-center items-center space-x-6 text-slate-500 dark:text-slate-400"
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
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`${label} Profile`}
              className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;

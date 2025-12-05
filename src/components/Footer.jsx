import { motion } from "framer-motion";
import { Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full py-8">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="text-center text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2"
        >
          © {new Date().getFullYear()} |{" "}
          <a
            className="underline hover:text-primary dark:hover:text-primary"
            href="#"
          >
            Designed and coded
          </a>{" "}
          with <Heart className="text-red-500 fill-red-500" size={16} /> by
          Shahriar Hasan Himel
        </motion.p>
      </div>
    </footer>
  );
}

export default Footer;

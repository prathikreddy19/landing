import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "3.2rem", lineHeight: 1.2 }}
      >
        I build scalable software <br /> and intelligent systems.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{ marginTop: "24px", maxWidth: "600px" }}
      >
        Computer Science undergraduate focused on full-stack development,
        backend engineering, and AI-driven applications.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={styles.btn}
        onClick={() =>
          document.getElementById("work").scrollIntoView({ behavior: "smooth" })
        }
      >
        Explore My Work
      </motion.button>
    </section>
  );
}

const styles = {
  btn: {
    marginTop: "40px",
    padding: "14px 30px",
    borderRadius: "8px",
    border: "none",
    background: "#38bdf8",
    color: "#020617",
    fontWeight: 600,
  },
};

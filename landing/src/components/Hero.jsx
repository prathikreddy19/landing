import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={styles.hero}>
      {/* Background Glow */}
      <div style={styles.glow}></div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        style={styles.title}
      >
        I build <span style={styles.gradient}>scalable software</span>
        <br />
        and intelligent systems.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={styles.subtitle}
      >
        Computer Science undergraduate crafting modern web platforms,
        backend systems, and AI-driven applications.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        onClick={() =>
          document.getElementById("work").scrollIntoView({ behavior: "smooth" })
        }
        style={styles.cta}
      >
        Explore My Work →
      </motion.button>
    </section>
  );
}

const styles = {
  hero: {
    minHeight: "100vh",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "28px",
    padding: "0 10%",
    overflow: "hidden",
  },
  glow: {
    position: "absolute",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, rgba(56,189,248,0.35), transparent 70%)",
    top: "-150px",
    right: "-150px",
    filter: "blur(80px)",
    zIndex: 0,
  },
  title: {
    fontSize: "3.6rem",
    lineHeight: 1.15,
    zIndex: 1,
  },
  gradient: {
    background: "linear-gradient(90deg, #38bdf8, #818cf8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    maxWidth: "640px",
    fontSize: "1.1rem",
    color: "#94a3b8",
    zIndex: 1,
  },
  cta: {
    marginTop: "20px",
    padding: "14px 34px",
    borderRadius: "999px",
    border: "none",
    background: "linear-gradient(90deg, #38bdf8, #818cf8)",
    color: "#020617",
    fontWeight: 600,
    width: "fit-content",
    zIndex: 1,
  },
};

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="contact"
      style={{
        textAlign: "center",
        position: "relative",
        zIndex: 2,
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Let’s build something meaningful.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{ marginTop: "12px", color: "#94a3b8" }}
      >
        Open to collaborations, internships, and impactful projects.
      </motion.p>

      {/* CTA Buttons */}
      <div style={styles.btnGroup}>
        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/prathikreddymettu/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={styles.primaryBtn}
        >
          Get in Touch
        </motion.a>

        {/* Gmail */}
        <motion.a
          href="mailto:prathikreddy1230@gmail.com"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={styles.secondaryBtn}
        >
          Email Me
        </motion.a>
      </div>
    </section>
  );
}

const styles = {
  btnGroup: {
    marginTop: "32px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  primaryBtn: {
    padding: "14px 32px",
    borderRadius: "10px",
    background: "#38bdf8",
    color: "#020617",
    fontWeight: 600,
    textDecoration: "none",
  },
  secondaryBtn: {
    padding: "14px 32px",
    borderRadius: "10px",
    border: "1px solid #38bdf8",
    color: "#38bdf8",
    textDecoration: "none",
    fontWeight: 600,
  },
};

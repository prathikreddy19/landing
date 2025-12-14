import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h2>About</h2>
      <p style={{ maxWidth: "700px", marginTop: "20px" }}>
        I’m Prathik Reddy, a Computer Science student who enjoys building
        real-world engineering solutions across AI systems, scalable backend
        services, and modern web applications.
      </p>
    </motion.section>
  );
}

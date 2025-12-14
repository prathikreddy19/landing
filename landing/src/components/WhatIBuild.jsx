import { motion } from "framer-motion";

const items = [
  {
    title: "Full-Stack Systems",
    desc: "Scalable MERN & FastAPI applications with clean architecture and secure authentication.",
  },
  {
    title: "AI & ML Products",
    desc: "Transformer-based models, NLP pipelines, and real-time inference systems.",
  },
  {
    title: "Automation & IoT",
    desc: "ESP32-based automation with sensor integration and web dashboards.",
  },
];

export default function WhatIBuild() {
  return (
    <section id="work">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        What I Build
      </motion.h2>

      <div style={styles.grid}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -12, boxShadow: "0 20px 40px rgba(56,189,248,0.15)" }}
            style={styles.card}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "28px",
    marginTop: "48px",
  },
  card: {
    background: "rgba(255,255,255,0.03)",
    backdropFilter: "blur(14px)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "20px",
    padding: "36px",
    transition: "0.3s ease",
  },
};

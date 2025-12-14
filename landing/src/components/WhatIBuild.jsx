import { motion } from "framer-motion";

const items = [
  { title: "Full-Stack Systems", desc: "MERN, FastAPI, scalable architectures" },
  { title: "AI & ML Products", desc: "Transformers, NLP, real-time inference" },
  { title: "Automation & IoT", desc: "ESP32, sensors, dashboards" },
];

export default function WhatIBuild() {
  return (
    <section id="work">
      <h2>What I Build</h2>
      <div style={styles.grid}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
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
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "24px",
    marginTop: "40px",
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    padding: "30px",
    borderRadius: "14px",
  },
};

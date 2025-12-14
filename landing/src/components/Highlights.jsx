import { motion } from "framer-motion";

export default function Highlights() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h2>Impact Highlights</h2>
      <ul style={{ marginTop: "30px", lineHeight: 2 }}>
        <li>AI models achieving R² = 0.97</li>
        <li>Production-ready ML pipelines</li>
        <li>Real-time IoT automation systems</li>
        <li>End-to-end full-stack deployments</li>
      </ul>
    </motion.section>
  );
}

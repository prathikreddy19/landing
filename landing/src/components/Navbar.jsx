import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={styles.nav}
    >
      <h3>Prathik</h3>
      <div style={styles.links}>
        <span onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>About</span>
        <span onClick={() => document.getElementById("work").scrollIntoView({ behavior: "smooth" })}>Work</span>
        <span onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Contact</span>
      </div>
    </motion.nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    padding: "20px 10%",
    display: "flex",
    justifyContent: "space-between",
    background: "rgba(2,6,23,0.9)",
    backdropFilter: "blur(10px)",
    zIndex: 100,
  },
  links: {
    display: "flex",
    gap: "24px",
    cursor: "pointer",
  },
};

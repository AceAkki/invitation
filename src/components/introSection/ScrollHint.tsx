import { motion } from "motion/react";

export default function ScrollHint() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: [0, 1, 1, 0], y: [0, -6, 0, -6] }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0.5,
      }}
      className="scroll-btn"
      aria-hidden={false}
      role="status"
    >
      Scroll down
    </motion.div>
  );
}

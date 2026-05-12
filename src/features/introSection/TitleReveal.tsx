import { motion, type Variants } from "framer-motion";
import "./css/titleReveal.css";

const RoyalWeddingReveal = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      // filter: "blur(1px)",
      transition: {
        duration: 1.2,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 1.5, ease: "easeInOut", delay: 1.2 },
    },
  };

  return (
    <div className="title-wrapper ">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="title-container"
      >
        {/* Top Decorative Line */}
        <motion.div variants={lineVariants} className="title-line gold-bg" />

        <div className="text-group gold-text">
          <motion.h1 variants={itemVariants} className="title-name">
            Akshay
          </motion.h1>

          <motion.span variants={itemVariants} className="title-ampersand ">
            Weds
          </motion.span>

          <motion.h1 variants={itemVariants} className="title-name">
            Divyani
          </motion.h1>
        </div>

        {/* Bottom Decorative Line */}
        <motion.div variants={lineVariants} className="title-line gold-bg" />

        {/* <motion.p variants={itemVariants} style={styles.subtext}>
          SAVE THE DATE
        </motion.p> */}
      </motion.div>
    </div>
  );
};

export default RoyalWeddingReveal;

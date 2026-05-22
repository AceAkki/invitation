import { motion, type Variants } from "framer-motion";
import ArchBG from "../../assets/rose-arc.webp";

export default function CoupleWrap() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.3 },
    },
  };

  const nameVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)", scale: 0.2 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const frameVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 2, delay: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="couple-wrap"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      <motion.h1 className="name-title gold-text" variants={nameVariants}>
        Akshay
      </motion.h1>
      <motion.h3 className="name-sub-title gold-text" variants={nameVariants}>
        And
      </motion.h3>
      <motion.h1 className="name-title gold-text" variants={nameVariants}>
        Divyani
      </motion.h1>
      <motion.img
        src={ArchBG}
        className="frame"
        alt=""
        variants={frameVariants}
      />
    </motion.div>
  );
}

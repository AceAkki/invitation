import { motion, type Variants } from "motion/react";

export function InvitationMessage({
  currentParam,
}: {
  currentParam: string | null;
}) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 3,
        ease: "easeOut",
      },
    },
  };

  // Split text into words for staggered animation
  const name = `Dear ${currentParam},`;
  const text = `
   You've been an important part of our journey, and we'd be honored to have you witness our union and celebrate this joyful new chapter with us.`;
  const title = name.split(" ");
  const words = text.split(" ");

  return (
    <>
      <motion.p
        className="invite-into-msg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {title.map((word, index) => (
          <motion.span key={index} variants={childVariants}>
            {word}{" "}
          </motion.span>
        ))}
      </motion.p>
      <motion.p
        className="invite-into-msg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, index) => (
          <motion.span key={index} variants={childVariants}>
            {word}{" "}
          </motion.span>
        ))}
      </motion.p>
    </>
  );
}

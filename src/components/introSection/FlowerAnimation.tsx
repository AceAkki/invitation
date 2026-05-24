import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

type flowerProps = {
  src: string;
  xPos: string;
  speed: number;
  yOffset?: number;
};

// Individual Flower Component for easier positioning
export const FlyingFlower = ({
  src,
  xPos = "10%",
  speed = -500,
  yOffset = 200,
}: flowerProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yRaw = useTransform(scrollYProgress, [0, 1], [yOffset, speed]);
  // This creates the "Flying Up" effect by moving the Y position
  // much faster than the actual scroll speed
  const y = useSpring(yRaw, {
    stiffness: 100, // Higher = faster/snappier
    damping: 30, // Higher = less oscillation/bouncing
    restDelta: 0.001,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]); // Slight tilt as they rise

  return (
    <motion.img
      ref={ref}
      src={src}
      className="flying-flower"
      style={{
        y,
        opacity,
        rotate,
        position: "absolute",
        left: xPos,
        zIndex: 1,
        pointerEvents: "none", // Ensures they don't block clicks
      }}
    />
  );
};

export const SwayFlower = ({
  src,
  xPos = "10%",
  speed = -500,
  yOffset = 0,
}: flowerProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 1. Use a slightly higher damping for a "heavier," smoother feel
  const yRaw = useTransform(scrollYProgress, [0, 1], [yOffset, speed]);
  const y = useSpring(yRaw, { stiffness: 50, damping: 25, restDelta: 0.001 });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.img
      ref={ref}
      src={src}
      // Use 'animate' for things that DON'T conflict with scroll 'y'
      animate={{
        x: [0, 10, 0], // Sway side-to-side instead of fighting the vertical scroll
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="flying-flower"
      style={{
        y, // Scroll-driven vertical movement
        opacity,

        position: "absolute",
        left: xPos,
        zIndex: 5,
        pointerEvents: "none",
        willChange: "transform", // CRITICAL: Tells the browser to use the GPU
      }}
    />
  );
};

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from 'react-responsive'; // Import useMediaQuery hook

const ThirdSection = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end start"],
  });

  const isSmScreen = useMediaQuery({ maxWidth: 768 });

  const sm = isSmScreen ? 0 : useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <section className="relative h-screen mb-56 lg:mb-40" ref={container}>
      <motion.div style={{ y: sm }}>
        <video
          className="object-cover min-w-screen pointer-events-none absolute top-0"
          autoPlay
          loop
          muted
        >
          <source src="/videos/home-galleon-animation.webm" type="video/webm" />
        </video>
      </motion.div>
    </section>
  );
};

export default ThirdSection;

import React from "react";
import { motion } from "framer-motion";

const HeroHeading = () => {
  const wordVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const SplashHeading = "WELCOME TO \nTHE NEW EDGE";
  const MainHeading = (
    <>
      THE WORLD'S FIRST<br />
      FULL STACK EDGE<br />
      COMPUTING PLATFORM<br />
      IS HERE.
    </>
  );

  return (
    <div className="text-white font-[500] leading-none relative">
      {/* splash */}
      <motion.span
        initial={{ top: 0, opacity: 1 }}
        animate={{ top: -100, opacity: 0 }}
        transition={{ duration: 0.2, delay: 2 }}
        className="relative text-[3em] lg:text-[9em] line before:bg-blue-600 before:h-2 before:w-20 before:-bottom-10"
      >
        {SplashHeading.split(" ").map((word, index) => (
          <>
            <motion.span
              key={index}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              {word}
            </motion.span>
            &nbsp;
          </>
        ))}
      </motion.span>

      {/* heading*/}
      <motion.span
        initial={{ top: -100, opacity: 0 }}
        animate={{ top: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="absolute left-0 text-[2em]  lg:text-[5em] line before:bg-blue-600 before:h-2 before:w-20 before:-bottom-10"
      >
        {MainHeading}
      </motion.span>
    </div>
  );
};

export default HeroHeading;

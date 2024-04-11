import React, { useRef } from "react";
import HeroHeading from "./HeroHeading";
import BorderButton from "../BorderButton";
import { motion, useTransform, useScroll } from "framer-motion";
import Box from "../Box";
import { useMediaQuery } from 'react-responsive'; 

const HeroSection = () => {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", " end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const md = useTransform(scrollYProgress, [0,1], [0,300]);

  const isSmScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <section className="h-screen relative" ref={container}>
      <video
        className="object-cover min-h-screen  pointer-events-none absolute top-0 "
        autoPlay
        loop
        muted
      >
        <source src="/videos/home-hero-video-v3.mp4" type="video/mp4" />
      </video>

      <motion.main
        style={{ y: isSmScreen ? 0 : sm }}
        className="pl-5 pt-40 lg:pl-56 lg:pt-64 flex flex-col gap-y-7 lg:gap-y-5 relative z-10"
      >
        {/*heading */}
        <HeroHeading />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-col gap-y-7 lg:gap-y-5"
        >
          {/* watch launch filim button  */}
          <button className="max-w-fit">
            <BorderButton text={"Watch the launch film"} />
          </button>
          {/* description  */}
          <div className="mt-10">
            <p className="max-w-[500px] text-white text-xl relative line before:w-16 before:bg-blue-600 before:h-2 before:bottom-32">
              Unlock the full potential of satellite connectivity with Commander
              Connect – the ultimate Starlink operating system for connecting,
              managing and optimizing multiple&nbsp;terminals.
            </p>
          </div>
          {/* sign up for early access button  */}
          <button className="max-w-fit">
            <BorderButton text={"Sign up for early access"} />
          </button>
        </motion.div>
      </motion.main>

      {/* box  */}
      <motion.div style={{y: isSmScreen ? 0 : md}} className={`absolute -bottom-24 lg:right-28`}>
        <Box
          text={
            "We're bridging the digital divide, so everyone is free to connect, compute, and innovate at the edge."
          }
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;

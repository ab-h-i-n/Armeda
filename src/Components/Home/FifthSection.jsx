import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import OdometerCouter from "./OdometerCounter";

const FifthSection = () => {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start ", "center start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [500, -200]);
  const md = useTransform(scrollYProgress, [0, 1], [500, -400]);

  const isSmScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <section className="lg:h-screen ">
      {/* counter continer */}
      <motion.div style={{ y: isSmScreen ? 0 : sm }} className="bg-gray-300 h-[80vh] lg:h-screen">
        {/* left container  */}
        <motion.div
          style={{ y: isSmScreen ? -90 : md }}
          className=" relative p-5 lg:pl-32"
        >
          {/* icon */}
          <img
            src="/images/icon-cloud.svg"
            alt="icon"
            className="absolute z-50 w-12 lg:w-20 left-10 lg:left-40 -top-3 lg:-top-8 "
          />
          {/* content */}
          <div className="bg-[#ffffffc0] backdrop-blur-md w-full rounded-md lg:pt-28 p-10 flex flex-col gap-10 max-w-[45rem] ">
            {/* title */}
            <p className="pb-5 text-black font-serif text-2xl lg:text-4xl line relative before:bg-blue-600 before:w-20 before:h-2 before:-bottom-2">
              So long, latency
            </p>

            {/* description */}
            <p className="text-gray-700 text-lg lg:text-xl ">
              Beyond bandwidth, real-time infrastructure and data processing is
              a matter of physics. Data center latency can be the difference
              between success or failure, profit or loss, and in critical cases,
              life or death.
            </p>
          </div>
        </motion.div>

        <OdometerCouter/>
      </motion.div>
    </section>
  );
};

export default FifthSection;

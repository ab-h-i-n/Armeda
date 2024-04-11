import React, { useRef } from "react";
import BorderButton from "../BorderButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from 'react-responsive'; 

const FourthSection = () => {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const md = useTransform(scrollYProgress, [0, 1], [400, -230]);
  const sm = useTransform(scrollYProgress, [0, 1], [50, -120]);

  const isSmScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <section className="h-[50vh] lg:h-screen bg-contain bg-no-repeat lg:bg-cover bg-[url('/images/sec4_bg.webp')] p-5 lg:p-0 lg:pl-20">
      <div className="grid lg:grid-cols-2 gap-y-5 lg:gap-10 -translate-y-[110%] lg:-translate-y-1/2">
        {/* left container  */}
        <motion.div
          style={{ y: isSmScreen ? 0 : sm }}
          className="lg:pl-10 relative "
        >
          {/* icon */}
          <img
            src="/images/icon-cloud.svg"
            alt="icon"
            className="absolute z-50 w-12 lg:w-20 left-10 lg:left-20 -top-5 lg:-top-12 "
          />
          {/* content */}
          <div className="bg-[#3f516e89] backdrop-blur-md w-full rounded-md lg:pt-28 p-10 flex flex-col gap-10 ">
            {/* title */}
            <p className="pb-5 text-white font-serif text-2xl lg:text-4xl line relative before:bg-blue-600 before:w-20 before:h-2 before:-bottom-2">
              The cloud has revolutionized <br /> connectivity and speed, but
              only taken us so far.
            </p>

            {/* description */}
            <p className="text-gray-400 text-lg lg:text-xl">
              Vast parts of the world have no permanent connection to the
              internet - making them feel as distant as outer space. That’s why
              we built the first full-stack Edge Computing platform.
            </p>

            {/* buttons */}
            <div className="grid gap-y-5 max-w-[300px]">
              {/* button 1 */}
              <BorderButton text={"Watch our Product Overview"} />

              {/* button 2 */}
              <BorderButton text={"Sign up for early access"} />
            </div>
          </div>
        </motion.div>

        {/* photos gallery  */}
        <motion.div style={{ y: isSmScreen ? 0 : md }} className="grid grid-cols-2 gap-5 lg:gap-10 lg:p-10">
          <img src="/images/sec4_img1.webp" alt="img1" className="rounded-md" />
          <img src="/images/sec4_img2.webp" alt="img2" className="rounded-md" />
        </motion.div>
      </div>
    </section>
  );
};

export default FourthSection;

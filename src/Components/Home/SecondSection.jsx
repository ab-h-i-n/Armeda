import React, { useRef } from "react";
import BorderButton from "../BorderButton";
import { motion, useScroll, useTransform } from "framer-motion";
import Box from "../Box";
import { useMediaQuery } from 'react-responsive'; // Import useMediaQuery hook

const SecondSection = () => {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);
  const md = useTransform(scrollYProgress , [0,1] , ["50%","-50%"]);

  // Use useMediaQuery hook to check screen width
  const isSmScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <section className="min-h-screen pt-[10rem] lg:pt-[40rem]" ref={container}>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-5 lg:p-20 gap-16">
        {/* left container  */}
        <div className="lg:pl-10 relative order-2 lg:-order-1">
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
        </div>

        {/* photo gallery  */}
        <motion.div style={{ y: isSmScreen ? 0 : sm }} className="grid grid-cols-2 gap-5 lg:gap-16 ">
          <img src="/images/sec2_img1.webp" alt="img1" />
          <img src="/images/sec2_img2.webp" alt="img2" />
          <img src="/images/sec2_img3.webp" alt="img3" />
          <img src="/images/sec2_img4.webp" alt="img4" />
        </motion.div>
      </div>

      {/* box 2 */}
      <motion.div style={{ y: isSmScreen ? 0 : md }} className="flex justify-center py-5 lg:py-20">
        <Box
          text={
            "RECENT REVOLUTIONS IN IOT, AI AND SATELLITE CONNECTIVITY HAVE CREATED THE PERFECT OPPORTUNITY FOR INNOVATION."
          }
        />
      </motion.div>
    </section>
  );
};

export default SecondSection;

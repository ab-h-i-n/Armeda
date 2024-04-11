import React, { useState, useEffect } from "react";
import BorderButton from "../BorderButton";

const SixthSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const listItems = document.querySelectorAll("li");

      const viewportHeight = window.innerHeight / 2 + window.scrollY;

      for (let i = 0; i < listItems.length; i++) {
        const listItemTop = listItems[i].getBoundingClientRect().top + window.scrollY;
        const listItemBottom = listItemTop + listItems[i].offsetHeight;

        if (listItemTop <= viewportHeight && listItemBottom >= viewportHeight) {
          setActiveIndex(i);
          break; 
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="lg:mt-[10rem] lg:pt-[16rem] relative">
      {/* background and left container */}
      <div className="h-screen lg:pl-[35rem] overflow-hidden lg:sticky lg:top-0 ">
        {/* left container  */}
        <div className="lg:pl-44 absolute lg:top-[16rem] translate-x-[-35rem] max-w-[820px]  ">
          {/* icon */}
          <img
            src="/images/sec6_icon.svg"
            alt="icon"
            className="absolute z-50 w-12 lg:w-20 left-10 lg:left-52 -top-5 lg:-top-12 "
          />
          {/* content */}
          <div className="bg-[#3f516e89] backdrop-blur-md w-full rounded-md lg:pt-28 p-10 flex flex-col gap-10 ">
            {/* title */}
            <p className="pb-5 text-white font-serif text-2xl lg:text-4xl line relative before:bg-blue-600 before:w-20 before:h-2 before:-bottom-2">
              Imagine the problems you could solve in a world without bandwidth
              and latency barriers
            </p>

            {/* button */}
            <div className="max-w-[300px] py-10">
              <BorderButton text={"Products"} />
            </div>
          </div>
        </div>
        <img src={`/images/sec6_img${activeIndex + 1}.webp`} alt="img" className="object-cover h-screen" />
      </div>

      <div className="grid lg:grid-cols-2 absolute top-0 py-5  lg:py-0 lg:block">
        <div></div>
        {/* right list */}
        <ul className={`text-[#ffffffa1] z-50 grid gap-40 font-serif text-2xl lg:text-4xl my-5 lg:my-[30rem] ${
          activeIndex !== null ? `active` : ''
        }`}>
          <li
            className={activeIndex === 0 ? "active-list-item" : ""}
          >
            Monitor your Starlink deployments <br /> from anywhere using
            Starlink.
          </li>
          <li
            className={activeIndex === 1 ? "active-list-item" : ""}
          >
            Quickly deploy apps from the <br /> Armada marketplace.
          </li>
          <li
            className={activeIndex === 2 ? "active-list-item" : ""}
          >
            Take the power and promise of <br /> everything AI has to offer and{" "}
            <br /> deploy it at the edge.
          </li>
          <li
            className={activeIndex === 3 ? "active-list-item" : ""}
          >
            Solve your greatest problems and <br /> challenges and seize
            opportunities <br />
            that until now have been completely <br /> out of reach.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SixthSection;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HamburgerIcon from "./HamburgerIcon";

const ListItems = ({ item }) => {
  return (
    <div className="flex items-center justify-center px-3 py-4 transition-all hover:bg-black bg-transparent rounded-xl cursor-pointer mx-5 ">
      <span className="relative line before:bg-current ">{item}</span>
    </div>
  );
};

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <motion.nav
      className="z-[100] h-[84px] text-gray-300 text-sm fixed top-0 w-screen flex justify-between items-center p-2 px-5 lg:px-40"
      style={{ 
        backdropFilter: scrollY > window.innerHeight * 0.05 ? "blur(20px)" : "none",
        backgroundColor: scrollY > window.innerHeight * 0.05 ? "#343c41b0" : "transparent",
        transition: "background-color 0.3s, backdrop-filter 0.3s"
      }}
    >
      {/* left column  */}
      <div>
        {/* logo  */}
        <Link to={"/"}>
          <img
            src="/images/logo-white-shadow.webp"
            alt="logo"
            className="w-36 lg:w-44"
          />
        </Link>
      </div>

      {/* middle column  */}
      {/* menu  */}
      <div className="grid-cols-5 font-medium hidden lg:grid">
        {/* menu items  */}
        <ListItems item={"Products"} />
        <ListItems item={"Why Armada?"} />
        <ListItems item={"Industries"} />
        <ListItems item={"About Us"} />
        <ListItems item={"Resources"} />
      </div>

      {/* right column */}
      <div>
        <Link className="hidden lg:block bg-blue-600 hover:bg-white hover:text-black transition-all font-medium px-5 py-4 rounded-md ">
          <span className="line relative before:bg-current transition-all">
            Schedule a demo
          </span>
        </Link>

        {/*hamburger*/}
        <HamburgerIcon/>
      </div>
    </motion.nav>
  );
};

export default Header;

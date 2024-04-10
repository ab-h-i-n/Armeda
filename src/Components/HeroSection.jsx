import React from "react";
import HeroHeading from "./HeroHeading";

const HeroSection = () => {
  return (
    <div className="h-screen overflow-hidden relative">
      <video
        className="object-cover min-h-screen pointer-events-none absolute top-0 "
        autoPlay
        loop
        muted
      >
        <source
          src="/videos/home-hero-video-v3.mp4"
          type="video/mp4"
        />
      </video>

      <main className="pl-5 pt-40 lg:pl-56 lg:pt-64 grid-rows-4 relative z-10">

        {/*heading */}
        <HeroHeading/>

      </main>
    </div>
  );
};

export default HeroSection;

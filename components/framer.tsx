"use client";
import Image from "next/image";
import {motion} from "framer-motion"
// images
import hero from "../public/assets/images/Hero.png"

const Hero = () => {
  return (
    <motion.div
      whileInView={{
        rotate: "360deg",
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
      }}
      className="rounded-full w-4/5 md:w-1/2 md:absolute md:right-[-24%]"
    >
      <Image src={hero} alt="Hero" className="rounded-full w-full" />
    </motion.div>
  );
};

export default Hero;

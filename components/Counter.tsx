"use client";

import { useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Image from "next/image";
import Star from "../public/assets/images/Star.png"

const Counter = () => {
  const [on, setOn] = useState<boolean>(false);

  const handleInitial = () => {
    setOn(false);
  };

  const handleInView = () => {
    setOn(true);
  };

  return (
    <>
      <motion.div
        className="w-[100%] flex justify-evenly items-center flex-wrap"
        initial={handleInitial as any}
        whileInView={handleInView as any}
      >
        <div className="w-full mb-4 flex flex-col items-center md:items-start md:w-auto">
          <h2 className="text-2xl">
            {on && <CountUp start={0} end={12000} duration={4} delay={0} />}<span className="text-[#FB4A36]">+</span>
          </h2>
          <p className="text-1xl">Customers</p>
        </div>
        <div className="w-full mb-4 flex flex-col items-center md:items-start md:w-auto">
          <h2 className="text-2xl">
            {on && <CountUp start={0} end={50} duration={5} delay={0} />}<span className="text-[#FB4A36]">+</span>
          </h2>
          <p className="text-1xl">Awesome menus</p>
        </div>
        <div className="w-full mb-4 flex flex-col items-center md:items-start md:w-auto">
          <h2 className="flex text-2xl items-center">
            {on && <CountUp start={0} end={4} duration={5} delay={0} />}<Image src={Star} alt="star" width={25} height={25} />
          </h2>
          <p className="text-1xl">Review on google</p>
        </div>
      </motion.div>
    </>
  );
};

export default Counter;
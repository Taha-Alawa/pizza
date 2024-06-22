"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import pizza1 from "../public/assets/images/pizza1.png";
import pizza2 from "../public/assets/images/pizza2.png";
import pizza3 from "../public/assets/images/pizza3.png";
import pizza4 from "../public/assets/images/pizza4.png";
import pizza5 from "../public/assets/images/pizza5.png";
import pizza6 from "../public/assets/images/pizza6.png";
import pizza7 from "../public/assets/images/pizza7.png";
import pizza8 from "../public/assets/images/pizza8.png";

const Images = () => {
  return (
    <section
      dir="rtl"
      className="flex flex-wrap justify-between w-[95%] mb-[100px] my-10 mx-auto"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: "25px",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          duration: "1s",
          mass: 0.8,
        }}
        exit={{
          opacity: 0,
          y: "25px",
          transition: { duration: 0.5 },
        }}
        className="w-[30%] md:w-[18%] mb-[2%]"
      >
        <Image
          src={pizza1}
          alt="Pizza images"
          className="w-full h-full rounded-[10px]"
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: "25px",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          duration: "1s",
          mass: 0.8,
        }}
        exit={{
          opacity: 0,
          y: "25px",
          transition: { duration: 0.5 },
        }}
        className="w-[65%] md:w-[36%] mb-[2%]"
      >
        <Image
          src={pizza2}
          alt="Pizza images"
          className="w-full h-full rounded-[10px]"
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: "25px",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          duration: "1s",
          mass: 0.8,
        }}
        exit={{
          opacity: 0,
          y: "25px",
          transition: { duration: 0.5 },
        }}
        className="w-[40%] md:w-[18%] mb-[2%]"
      >
        <Image
          src={pizza3}
          alt="Pizza images"
          className="w-full h-full rounded-[10px]"
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: "25px",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          duration: "1s",
          mass: 0.8,
        }}
        exit={{
          opacity: 0,
          y: "25px",
          transition: { duration: 0.5 },
        }}
        className="w-[55%] md:w-[23%] mb-[2%]"
      >
        <Image
          src={pizza4}
          alt="Pizza images"
          className="w-full h-full rounded-[10px]"
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: "25px",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          duration: "1s",
          mass: 0.8,
        }}
        exit={{
          opacity: 0,
          y: "25px",
          transition: { duration: 0.5 },
        }}
        className="w-[17%] hidden md:block"
      >
        <Image
          src={pizza5}
          alt="Pizza images"
          className="w-full h-full rounded-[10px]"
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: "25px",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          duration: "1s",
          mass: 0.8,
        }}
        exit={{
          opacity: 0,
          y: "25px",
          transition: { duration: 0.5 },
        }}
        className="w-[17%] hidden md:block"
      >
        <Image
          src={pizza6}
          alt="Pizza images"
          className="w-full h-full rounded-[10px]"
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: "25px",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          duration: "1s",
          mass: 0.8,
        }}
        exit={{
          opacity: 0,
          y: "25px",
          transition: { duration: 0.5 },
        }}
        className="w-[50%] md:w-[32%]"
      >
        <Image
          src={pizza7}
          alt="Pizza images"
          className="w-full h-full rounded-[10px]"
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: "25px",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          duration: "1s",
          mass: 0.8,
        }}
        exit={{
          opacity: 0,
          y: "25px",
          transition: { duration: 0.5 },
        }}
        className="w-[45%] md:w-[28%]"
      >
        <Image
          src={pizza8}
          alt="Pizza images"
          className="w-full h-full rounded-[10px]"
        />
      </motion.div>
    </section>
  );
};

export default Images;

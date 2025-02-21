import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { gmail, phone } from "../assets";
import Socials from "./Socials";

const Contact = () => {
  return (
    <div className="xl:mt-12 w-full xl:flex-row flex-col-reverse flex gap-4 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>

        <div className=" fleX flex-col space-y-24">
          <div className="flex flex-col space-y-2">
            <h3 className={styles.sectionHeadText}>Contact.</h3>

            <h2 className="">Email: arganzapatrick@gmail.com</h2>
            <h2 className="">Phone: +63 994 4100 776</h2>
          </div>

          <div className="flex flex-col justify-start ">
            <h1 className="text-2xl mb-2 font-bold">Learn more.</h1>
            <Socials />
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

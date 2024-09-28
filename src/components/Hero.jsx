import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Planet from "./Planet";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1
            className={`${styles.heroHeadText} text-white`}
            data-aos="fade-right"
            data-aos-delay="3000"
            data-aos-duration="4000"
          >
            Hi, I'm <span className="text-[#915eff]"> Patrick</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100`}
            data-aos="fade-right"
            data-aos-delay="4000"
            data-aos-duration="4000"
          >
            I develop Websites and Mobile Apps.
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="block md:hidden absolute xs:bottom-24 sm:bottom-16 bottom-6 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] mb-12 rounded-3xl border-4 border-secondary flex justify-center items-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-5"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

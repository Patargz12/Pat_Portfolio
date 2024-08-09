import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonials,
  name,
  company,
  contact,
  image,
  email,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-100 p-8 rounded-3xl sm:w-[500px] md:w-[600px] lg:w-[700px] w-full shadow-2xl hover:shadow-3xl transition-shadow duration-300"
  >
    <div className="mt-0">
      <p className="text-white tracking-wider text-[16px] sm:text-[18px]">
        {testimonials}
      </p>

      <div className="flex flex-col-reverse sm:flex-row items-center gap-6 mt-4">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[24px] sm:text-[30px] mb-4">
            {name}
          </p>
          <p className="text-secondary text-[12px] sm:text-[14px]">{company}</p>
          <p className="text-secondary text-[12px] sm:text-[14px]">
            <b>Contact:</b> {contact}
          </p>
          <p className="text-secondary text-[12px] sm:text-[14px]">
            <b>Email:</b> {email}
          </p>
        </div>
        <img
          src={image}
          alt={`reference-by-${name}`}
          className="w-48 h-48 sm:w-32 sm:h-32 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Connections you can trust</p>
          <h2 className={styles.sectionHeadText}>References.</h2>
        </motion.div>
      </div>
      <div
        className={`${styles.paddingX} -mt-20 pb-14 flex flex-col lg:flex-row lg:justify-center gap-7`}
      >
        {testimonials.map((reference, index) => (
          <FeedbackCard key={reference.name} index={index} {...reference} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

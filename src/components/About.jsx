import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import Tilt from "react-parallax-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className="sm:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-center items-center"
        >
          <img src={icon} alt={title} className="h-16 w-16 object-contain" />
          <h3 className="text-[20px] mt-5 font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap ">
        <motion.p
          variants={fadeIn("right", "", 0.1, 1)}
          className="mt-4 lg:pr-4 text-secondary text-[17px] max-w-xl leading-[30px] text-justify"
        >
          Praddyumn is currently working as a Senior Engineer at Samsung after graduating with an
          MTech in Computer Science from IIIT Hyderabad. Because of his interest
          to explore a lot, he brings in the experience of working as an intern in tech and non-tech roles
          in his career at MNC's like Cisco as well as at Stealth startups.
        </motion.p>
        <motion.p
          variants={fadeIn("left", "", 0.1, 1)}
          className="mt-4 lg:pl-4 text-secondary text-[17px] max-w-xl leading-[30px] text-justify"
        >
          He has also qualified GATE exam twice in Computer Science and out of
          his passion for teaching, he has worked with GeeksforGeeks and Unacademy as an
          Educator. In order to guide others and enhance his own public
          speaking skills, he shares his experiences through a YouTube channel
          as well.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

import React from "react";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

import { motion } from "framer-motion";
import { slideIn, fadeIn, textVariant } from "../utils/motion";

import { github } from "../assets";

import { styles } from "../styles";
import { devInfo } from "../constants";

// import "./ParticipantList.css";

const DevCard = ({ index, link, name, github}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-primary p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <div className="mt-1">
        {/* <p className="text-white tracking-wider text-[18px]">{testimonial}</p> */}
        <img src={`https://avatars.githubusercontent.com/${github}`} alt={name} className="w-full h-full object-cover rounded-2xl" />
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium test-[16px]">
                {name} <br />
              <span className="green-text-gradient">@</span> <a href={link} target="_blank">{github}</a>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ParticipantList = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>See Who Made This</p>
        <h2 className={styles.sectionHeadText}>Developers.</h2>
      </motion.div>

      <motion.div>
        <div className="mt-20 flex flex-wrap gap-7">
          {devInfo.map((project, index) => (
            <DevCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(ParticipantList, "Participant List");

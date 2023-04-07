import React from "react";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { githubIcon } from "../assets";
import { styles } from "../styles";
import { devInfo } from "../constants";

const DevCard = ({ index, link, name, github, image }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 2)}
      className="bg-primary p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <div>
        <div className="relative w-full h-[230px] hover:-translate-y-3 ease-in-out duration-500 hover:drop-shadow-3xl">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={githubIcon}
                alt="github"
                className="w-1/2 h-1/2 object-contain invert"
              />
            </div>
          </div>
        </div>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-extrabold text-[20px]">{name}</p>
            <p><span className="green-text-gradient">@&nbsp;</span>{github}</p>
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
        <p className={styles.sectionSubText}>TEAM DPS KOLAR</p>
        <h2 className={styles.sectionHeadText}>Developers.</h2>
      </motion.div>

      <motion.div>
        <div className="mt-1 flex flex-wrap gap-7">
          {devInfo.map((project, index) => (
            <DevCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(ParticipantList, "developers");

import React from "react";
import { SectionWrapper } from "../hoc";

import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

import './ParticipantList.css';

const ParticipantList = () => {
    return (
        <motion.div
            variants={slideIn('right', "tween", 0.2, 1)}
            className="xl:flex-1 xl:h-auto md:h-[130px] h-[130px]"
        >
            <div
                className="bg-tertiary p-8 rounded-xl px-15"
            >
                <h1 className="font-bold text-2xl team-info">Team : <span>DPS Kolar</span></h1>
                <div className="hover-content">
                    <ul className="text-center pt-5 ">
                        <li>Om Pratap Dhaker </li>
                        <li>Varad Sharma </li>
                    </ul>
                </div>

            </div>

        </motion.div>
    );
};

export default SectionWrapper(ParticipantList, "Participant List");
import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[250px] w-full ">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full cyan-pink-gradient p-[2px] rounded-[20px] shadow-card"
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img src={icon} alt="title" className="w-16 h-16 object-contain" />
                    <p className="text-primary test-[20px] font-bold text-center">{title}</p>
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
    return (
        <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]">
            As a startup based in India, we are passionate about supporting and empowering aspiring entrepreneurs to achieve their dreams of building and growing successful businesses. We understand the challenges and complexities that come with starting a new venture, which is why we offer a comprehensive range of services and cutting-edge tools to help our clients overcome these obstacles and thrive in today's competitive business landscape. Our mission is to provide the highest quality support and resources to our clients, enabling them to turn their visions into reality and create long-term success for themselves and their communities.<br/><br/><span className="font-bold text-[20px] green-text-gradient">Below are some main services that we provide to our clients.</span>
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
            {services.map((service, index) => (
                <ServiceCard key={service.title} index={index} {...service} />
            ))}
        </div>

        </>
    )
}

export default SectionWrapper(About, "about")
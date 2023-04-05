import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Companies we've previously worked with</p>
                <h2 className={styles.sectionHeadText}>Companies Succeeded.</h2>
            </motion.div>
            <div className="flex flew-row flex-wrap justify-center gap-10 mt-[3%]">
                {technologies.map((technology) => (
                    <div className="w-28 h-28" key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Tech, "")
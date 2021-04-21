import React, { useEffect, useState } from "react";
import Hola from "../Components/About/Hola";
import Arrow from "../Components/About/Arrow";
import IntroText from "../Components/About/IntroText";
import TextoAnimado from "../Components/About/TextoAnimado";
import { motion } from "framer-motion";

const Works = () => {
  const [holaScale, setholaScale] = useState(1.2);

  useEffect(() => {
    setTimeout(() => setholaScale(1), 2000);
  }, []);

  return (
    <motion.div exit={{ opacity: 0 }}>
      <div className="workIntro">
        <div className="layout">
          <Hola />
          <IntroText />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 7, duration: 1 }}
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Arrow />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Works;

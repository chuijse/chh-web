import React, { useEffect, useState } from "react";
import Hola from "../Components/Work/Hola";
import Arrow from "../Components/Work/Arrow";
import IntroText from "../Components/Work/IntroText";
import TextoAnimado from "../Components/Work/TextoAnimado";
import { motion } from "framer-motion";

const Works = () => {
  const [holaScale, setholaScale] = useState(1.2);

  useEffect(() => {
    setTimeout(() => setholaScale(1), 2000);
  }, []);

  return (
    <>
      <div className="workIntro">
        <div className="layout">
          <Hola />
          <IntroText />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 7 }}
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 50 }}
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
    </>
  );
};

export default Works;

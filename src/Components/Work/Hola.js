import React from "react";
import { AnimatePresence, motion, useTransform } from "framer-motion";

const TextHola = () => {
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  const container = {
    initial: { opacity: 0, y: 0 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    initial: { y: 100, opacity: 0, scale: 1 },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
  };

  const sentence = "Hola";
  const myArray = sentence.split("");
  const whiteSapce = ",    ";

  const words = myArray.map((words) => {
    return <h1>{words.words}</h1>;
  });

  //&nbsp; space !

  return (
    <>
      <motion.div>
        <motion.span
          initial="initial"
          animate="animate"
          variants={container}
          className="textHola"
        >
          {myArray.map((words) => (
            <motion.span variants={item}>{words}</motion.span>
          ))}
          <motion.span variants={item} className="textYellow">
            !
          </motion.span>
        </motion.span>
      </motion.div>
    </>
  );
};

export default TextHola;

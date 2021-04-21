import React, { useState } from "react";
import flechahorizontal from "../images/flechaHorizontalB.svg";
import { AnimatePresence, motion, PresenceContext } from "framer-motion";
import Card from "./Card";

const CardGrande = () => {
  const [active, setactive] = useState(false);

  return (
    <>
      <div className="cardBigBackground">
        <motion.div
          onHoverStart={() => setactive(true)}
          onHoverEnd={() => setactive(false)}
          whileHover={{ scale: 1.1 }}
        >
          <Card color="whiteCard" />
        </motion.div>
      </div>
    </>
  );
};

export default CardGrande;

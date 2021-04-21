import React, { useState } from "react";
import { SplitText } from "../SplitText";
import { AnimatePresence, motion } from "framer-motion";

function TextoAnimado() {
  let [visible, setVisible] = useState(true);

  return (
    <>
      <p className="importantText">
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <SplitText
                initial={{ y: "100%" }}
                animate="visible"
                variants={{
                  visible: (i) => ({
                    y: 0,
                    transition: {
                      delay: i * 0.1,
                    },
                  }),
                }}
              >
                Siempre he visto el diseño como una disciplina transversal, por
                este motivo mi trabajo como
              </SplitText>
            </motion.div>
          )}
        </AnimatePresence>
      </p>
    </>
  );
}

export default TextoAnimado;

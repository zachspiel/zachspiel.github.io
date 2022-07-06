import { motion } from "framer-motion";
import React from "react";

interface Props {
  children: JSX.Element;
}

const MotionContainer = (props: Props): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {props.children}
    </motion.div>
  );
};
export default MotionContainer;

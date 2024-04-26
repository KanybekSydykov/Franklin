"use client";
import React from "react";
import { motion } from "framer-motion";

const Div = ({ children }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ type: 'spring', duration: 2 }}
      style={{width: '100%', height: '100%'}}
    >
      {children}
    </motion.div>
  );
};

export default Div;

'use client'

import { motion } from "framer-motion";

const Player = ({ onAnimationComplete }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 9 }}
        onAnimationComplete={onAnimationComplete}
      >
        <video autoPlay muted src="/preview.mp4"></video>
      </motion.div>
    </>
  );
};

export default Player;

import styles from "./preview.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const Preview = () => {
  return (
    <section className={styles.preloader}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        // onAnimationComplete={onAnimationComplete}
      >
        {" "}
        <div className={styles.logo}>
          <Image src="/LOGO-svg.png" alt="logo" width={43} height={83} />
        </div>
        <div></div>
        <div></div>
        {/* Your second preloader content */}
      </motion.div>
    </section>
  );
};

export default Preview;

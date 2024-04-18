import React, { useRef, useLayoutEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Box, useMediaQuery } from "@chakra-ui/react";

const OpacityDiv = ({Component,animate = true,negativeY = true,...props}) => {

  

  const [dimensions, setDimensions] = useState({
    offsetTop: 0,
    height: 0,
  });

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const ref = useRef(null);

  const { scrollY } = useScroll();
  const opacityAbout = useTransform(
    scrollY,
    [dimensions.offsetTop, dimensions.offsetTop + dimensions.height],
    isMobile ? [1, 1] : [1, 0]
  );
  const yText = useTransform(
    scrollY,
    [
      dimensions.offsetTop,
      negativeY
        ? dimensions.offsetTop + dimensions.height
        : dimensions.offsetTop + dimensions.height / 2,
    ],
    isMobile ? [0, 0] : [0, negativeY ? -500 : 550]
  );
  const scale = useTransform(
    scrollY,
    [dimensions.offsetTop, dimensions.offsetTop + dimensions.height],
    isMobile ? [1, 1] : [1, 2]
  );

  const scrollTop = useTransform(
    scrollY,
    [dimensions.offsetTop, dimensions.offsetTop - dimensions.height],
    [0, 100]
  );

  useLayoutEffect(() => {
    if (ref.current) {
      setDimensions({
        offsetTop: ref.current.offsetTop,
        height: ref.current.offsetHeight,
      });
    }
  }, []);

  if (!Component) {
    return null; // Return early if Component is null
  }
  return (
    <Box
      as={motion.div}
      ref={ref}
      style={{
        opacity: animate && opacityAbout,
      }}
      w={"100vw"}
      h={"100vh"}
      overflowX={"hidden"}
      overflowY={"auto"}
      minH={"100vh"}
      scrollSnapAlign={"start"}
    >
      <Component
        yText={yText}
        scrollTop={scrollTop}
        opacity={opacityAbout}
        scale={scale}
        {...props}
      />
    </Box>
  );
};

export default OpacityDiv;

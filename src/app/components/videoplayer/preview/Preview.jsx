"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box, AspectRatio, Flex, Img, Text } from "@chakra-ui/react";
import AnimatedLogo from "@/components/animation-components/AnimatedLogo";
import Divider from "@/components/shared-components/Divider/Divider";

const variants = {
  visible: {
    opacity: 1,
    zIndex: 10,
    transition: { duration: 1, type: "tween" },
  },
  hidden: {
    opacity: [0.5, 0],
    zIndex: -1,
    transition: { duration: 1, type: "tween" },
  },
};

const Preview = ({ videoUrl, componentPreload }) => {
  const [isVideoVisible, setIsVideoVisible] = useState(true);
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  console.log(componentPreload.image);

  useEffect(() => {
    const videoTimer = setTimeout(() => {
      setIsVideoVisible(false);
      setIsComponentVisible(true);
    }, 4000); // 4 seconds delay

    const componentTimer = setTimeout(() => {
      setIsComponentVisible(false);
    }, 8000); // 2 seconds delay

    return () => {
      clearTimeout(videoTimer);
      clearTimeout(componentTimer);
    };
  }, []);

  return (
    <>
      <Box
        as={motion.div}
        variants={variants}
        initial="visible"
        animate={isVideoVisible ? "visible" : "hidden"}
        position={"fixed"}
        top={0}
        left={0}
        w={"100vw"}
        h={"100vh"}
      >
        <AspectRatio w={"100%"} h={"100%"}>
          <video
            autoPlay
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        </AspectRatio>
      </Box>

      {isComponentVisible && (
        <Box
          as={motion.div}
          variants={variants}
          // {
          //   visible: {
          //     opacity: [1],
          //     y:-300,
          //     transition: { duration: 1, type: "tween" },
          //   },
          //   hidden: {
          //     opacity: 0.5,
          //     y:0,
          //     transition: { duration: 1, type: "tween" },
          //   },
          // }
          initial="hidden"
          animate={isComponentVisible ? "visible" : "hidden"}
          exit={"hidden"}
          position={"fixed"}
          top={0}
          left={0}
          w={"100vw"}
          h={"100vh"}
          bg={"linear-gradient(294.25deg, #1D1D1F 0%, #3A3B3F 143.31%)"}
        >
          <Flex
            as={motion.div}
            variants={variants}
            flexDir={"column"}
            justifyContent="center"
            alignItems="center"
            w="100%"
            h="100%"
          >
            <Flex flexGrow={1} justify={"center"} align={"center"} w={"100%"} h={"100%"} flexDir={"column"}>
              <Flex h={{ base: "100px", lg: "150px" }} w={"100%"} flexDir={"column"} justifyContent={'space-evenly'} alignItems={'center'}>
                <AnimatedLogo />
                <Divider />
              </Flex>
              <Flex flexGrow={1} justifyContent={'center'} alignItems={'center'}>
                <Text
                fontFamily={"lora"}
                color={"#fff"}
                fontSize={{ base: "22px", lg: "30px" }}
                fontWeight={400}
                lineHeight={'38.4px'}
                >{componentPreload.text}</Text>
              </Flex>
            </Flex>

            <Flex w={"100%"} h={{ base: "300px", lg: "450px" }}>
              <Img
                src={componentPreload.image}
                w={"100%"}
                h={"100%"}
                objectFit={"cover"}
              />
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Preview;

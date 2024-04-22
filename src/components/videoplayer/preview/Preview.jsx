"use client";
import { useState, useEffect } from "react";
import { delay, motion, useAnimate } from "framer-motion";
import { Box, AspectRatio, Flex, Text } from "@chakra-ui/react";
import AnimatedLogo from "@/components/animation-components/AnimatedLogo";
import Divider from "@/components/shared-components/divider/Divider";
import Image from "next/image";

const video = {
  visible: {
    opacity: 1,
    zIndex: 10,
  },
  hidden: {
    opacity: 0,
    zIndex: -1,
    transition: { duration: 2, type: "tween" },
  },
};

const component = {
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

const Preview = ({ params, handlePreviewEnd }) => {
  const [scope, animate] = useAnimate();

  if (scope.current !== null) {
    console.log(scope);
    console.log("start to animate");
    animate(
      "video",
      { opacity: 0 },
      { duration: 1, delay: 5.5, ease: "easeInOut" }
    )
      .then(() => {
        return animate(".logo-video", { opacity: 1 }, { duration: 0.1 });
      })
      .then(() => {
        console.log("logo-video animation start");
        return Promise.all([
          animate(
            ".img-animation",
            { y: -350, x: -128, opacity: 1, scale: [1, 0.2],zIndex:100 },
            { duration: 1 }
          ),
          animate(
            ".logo-video",
            { background: "transparent" },
            { duration: 0.5, delay: 0.1 }
          ),
          animate(
            ".preview-component",
            { zIndex: 1 },
            { duration: 4, delay: 1, ease: "easeInOut" }
          )
        ]);
      })
      .then(() => {
        return Promise.all([
          animate(
            ".preview-component",
            { background: "transparent" },
            { duration: 1, delay: 1, type: "tween" }
          ),
          animate(
            ".preview-header",
            { opacity: 1 },
            { duration: 0.5, delay: 1 }
          ),
          animate(
            ".preview-text",
            { opacity: [1, 0.5, 0] },
            { duration: 1.5, delay: 1 }
          ),
          animate(
            ".preview-img",
            { height: ["450px", "0"] },
            { duration: 1.5, delay: 1 }
          ),
          animate(
            ".preview-component",
            { zIndex: -1 },
            { duration: 1, delay: 1, type: "tween" }
          ),
          animate(
            "video",
            { zIndex: -10 },
            { duration: 1, delay: 1.5, ease: "easeInOut" }
          ),
          animate(".logo-video", { zIndex: -9 }, { duration: 0.5, delay: 1 }),
        ]);
      })
      .then(() => {
        handlePreviewEnd();
      });
  }

  return (
    <>
      <Box position={"fixed"} top={0} left={0} w={"100vw"} h={"100vh"}>
        <Box
          as={motion.div}
          position={"absolute"}
          top={0}
          left={0}
          w={"100%"}
          h={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          ref={scope}
        >
          <video
            autoPlay
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 1,
              position: "absolute",
            }}
          >
            <source src={"/preview.mp4"} type="video/mp4" />
          </video>
          <Flex
            bg={"#130f10"}
            w={"100%"}
            h={"100%"}
            position={"absolute"}
            className="logo-video"
            alignItems={"center"}
            justifyContent={"start"}
            flexDir={"row"}
            gap={"150px"}
          >
            <Flex w={{ base: "40%", lg: "545px" }} h={"100%"}></Flex>
            <Flex w={"auto"} flexGrow={1}>
              <Box
                as={motion.div}
                className="img-animation"
                w={"13.5rem"}
                h={"25rem"}
                ms={"2.5rem"}
                // aspectRatio={"416/758"}
                position={"relative"}
              >
                <Image src={"/logo-video.png"} fill alt="company logo" />
              </Box>
            </Flex>
          </Flex>

          <Flex
            as={motion.div}
            className="preview-component"
            flexDir={"column"}
            justifyContent="center"
            alignItems="center"
            w="100%"
            h="100%"
            position={"absolute"}
            zIndex={-1}
            bg={" linear-gradient(294.25deg, #1D1D1F 0%, #3A3B3F 143.31%)"}
          >
            <Flex
              justify={"center"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              flexDir={"column"}
            >
              <Flex
                h={{ base: "100px", lg: "150px" }}
                w={"100%"}
                flexDir={"column"}
                justifyContent={"space-between"}
                alignItems={"flex-end"}
                className="preview-header"
                pt={"149px"}
                position={"absolute"}
                top={0}
                left={0}
              >
                {/* <Box ms={"calc(40% + 150px)"} pt={"35px"}>
                  <AnimatedLogo />
                </Box> */}
                <Divider />
              </Flex>
              <Flex
                w={"100%"}
                h={{ base: "300px", lg: "300px" }}
                justifyContent={"center"}
                alignItems={"center"}
                position={"absolute"}
                left={0}
                top={150}
              >
                <Text
                  fontFamily={"lora"}
                  color={"#fff"}
                  fontSize={{ base: "22px", lg: "30px" }}
                  fontWeight={400}
                  lineHeight={"38.4px"}
                  className="preview-text"
                >
                  {params.locale === "ru"
                    ? "Дизайн который восхищает"
                    : "Design that delights"}
                </Text>
              </Flex>
            </Flex>

            <Flex
              w={"100%"}
              className="preview-img"
              h={{ base: "300px", lg: "450px" }}
              position={"absolute"}
              left={0}
              bottom={0}
            >
              <Box w={"100%"} h={"100%"} maxH={"100%"} position={"relative"}>
                <Image
                  src="/last-section-img-1.jpeg"
                  alt="preview-image"
                  sizes="100vw"
                  width={100}
                  height={100}
                  // Make the image display full width
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Preview;

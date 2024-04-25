"use client";
import { useState, useEffect, useRef } from "react";
import { delay, motion, useAnimate } from "framer-motion";
import { Box, AspectRatio, Flex, Text, calc, useMediaQuery } from "@chakra-ui/react";
import AnimatedLogo from "@/components/animation-components/AnimatedLogo";
import Divider from "@/components/shared-components/divider/Divider";
import Image from "next/image";


const Preview = ({ params, handlePreviewEnd }) => {
  const [scope, animate] = useAnimate();
  const [isVisible, setIsVisible] = useState(true);

  const mobileView = useMediaQuery("(max-width: 1024px)");

  console.log(mobileView);
  const logoRef = useRef(null);

  console.log(logoRef);

  if (scope.current !== null) {
    console.log(scope);
    console.log("start to animate");
    Promise.all([
      animate(
        "video",
        { opacity: 0 },
        { duration: 1, delay: 5.5, ease: "easeInOut" }
      ),
      animate(
        ".logo-animation",
        { opacity: 1 },
        { duration: 0.5, delay: 5.5, ease: "easeInOut" }
      ),
    ])
      .then(() => {
        return animate(
          ".logo-animation",
          {
            width: 40,
            height: 83,
            top: mobileView[0] ? 15: 35,
            left: logoRef.current.offsetLeft,
          },
          { duration: 0.5 }
        );
      })
      .then(() => {
        console.log("logo-video animation start");
        return Promise.all([
          animate(
            ".preview-component",
            { opacity:1 },
            { duration: .5, delay: 1, ease: "easeInOut" }
          ),
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
            ".logo-animation",
            { opacity: 0, zIndex: -5 },
            { duration: 0.01, delay: 1 ,type: "tween"}
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
            ".preview-header",
            { opacity: 0 },
            { duration: 0.5, delay: 1 }
          ),
          animate(
            "video",
            { zIndex: -10 },
            { duration: 1, delay: 1.5, ease: "easeInOut" }
          ).then(() => {
            console.log('animations finished');
            handlePreviewEnd();
            setIsVisible(false);
          })
        ]);
      })
  }

  const preview =  <Box
  ref={scope}
  position={"fixed"}
  top={0}
  left={0}
  w={"100vw"}
  h={"100vh"}
>
  <Box
    opacity={0}
    w={{ base:'13rem','2xl': "15.5rem" }}
    h={{ base:'24.5rem','2xl': "29rem" }}
    top={{ base:'calc(50% - 12.7rem)','2xl': "calc(50% - 15rem)" }}
    left={{base:'calc(50% - 6.3rem)','2xl': "calc(50% - 7.5rem)" }}
    className="logo-animation"
    position={"absolute"}
    zIndex={5}
  >
    <Image src={"/logo-video.png"} fill alt="company logo" />
  </Box>
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
        scale: 1.2,
      }}
    >
      <source src={"/preview.mp4"} type="video/mp4" />
    </video>

    <Flex
      as={motion.div}
      className="preview-component"
      flexDir={"column"}
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="100%"
      position={"absolute"}
      opacity={1}
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
          h={{ base: "120px", lg: "150px" }}
          w={"100%"}
          flexDir={"row"}
          flexWrap={"wrap"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          className="preview-header"
          pt={{ base: "0", lg: "0" }}
          position={"absolute"}
          top={0}
          left={0}
        >
          <Flex
            w={{ base: "100%", lg: "100%", xl: "100%" }}
            justifyContent={{ base: "center", lg: "center" }}
            alignItems={{ base: "center", lg: "flex-start" }}
            flexGrow={1}
          >
            <Box ref={logoRef} className="header-logo" opacity={0}>
              <AnimatedLogo />
            </Box>
          </Flex>

          <Box w={"100%"}>
            <Divider />
          </Box>
        </Flex>
        <Flex
          w={"100%"}
          h={{ base: "250px", lg: "200px" }}
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

  return (
    <>
    {isVisible && preview }
     
    </>
  );
};

export default Preview;

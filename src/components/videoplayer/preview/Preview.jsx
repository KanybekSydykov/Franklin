"use client";
import { useState, useEffect, useRef } from "react";
import { delay, motion, useAnimate } from "framer-motion";
import {
  Box,
  AspectRatio,
  Flex,
  Text,
  calc,
  useMediaQuery,
  background,
} from "@chakra-ui/react";
import AnimatedLogo from "@/components/animation-components/AnimatedLogo";
import Divider from "@/components/shared-components/divider/Divider";
import Image from "next/image";

const Preview = ({ params, handlePreviewEnd, handleMainVisibility }) => {
  const [scope, animate] = useAnimate();
  const [isVisible, setIsVisible] = useState(true);

  const mobileView = useMediaQuery("(max-width: 992px)");

  const logoRef = useRef(null);

  if (scope.current !== null) {

    console.log('starting logo animation');
    Promise.all([
      animate(
        ".logo-animation",
        { opacity: 1 },
        { duration: 2, delay: 0.2, type: "spring" }
      ).then(() => {
        Promise.all([
          animate(
            ".logo-animation",
            {
              width: 40,
              height: 77.43,
              top: mobileView[0] ? 15 : 35,
              left: logoRef.current.offsetLeft,
            },
            { duration: 0.8 }
          ),
          animate(
            ".preview-component",
            { opacity: 1 },
            { duration: 1.5, type: "spring" }
          ),
        ]);
      }),
    ]).then(() => {
    console.log('starting component animation');
        Promise.all([
          animate(
            ".preview-img",
            { height: ["450px", "0"],opacity:0 },
            { duration: 5 ,delay:2,type: "spring"}
          ),
          animate(
            ".preview-component",
            { background: "transparent" },
            { duration: 2.5,delay:2 }
          ),
          animate(
            ".preview-text",
            { opacity:  0 },
            { duration: 1.5,delay:2}
          ),
          animate(
            scope.current,
            { background: "transparent" },
            { duration: 2.5,delay:2}
          ),
          animate(
            ".preview-header",
            { opacity: 0 },
            { duration: 2.5, delay: 3 ,type: "spring"}
          ),
        ]);
    }).then(() => {
      handleMainVisibility();
    setTimeout(() => {
      handlePreviewEnd();
      setIsVisible(false);
    }, 5000);
      
    })

  }



  const preview = (
    <Box
      ref={scope}
      position={"fixed"}
      top={0}
      left={0}
      w={"100vw"}
      h={"100vh"}
      zIndex={2}
      bg={"linear-gradient(294.25deg, #1d1d1f 0%, #3a3b3f 143.31%)"}
    >
      <Box
        opacity={0}
        w={{ base: "13rem", "2xl": "15.5rem" }}
        h={{ base: "24.5rem", "2xl": "29rem" }}
        top={{ base: "calc(50% - 12.7rem)", "2xl": "calc(50% - 15rem)" }}
        left={{ base: "calc(50% - 6.3rem)", "2xl": "calc(50% - 7.5rem)" }}
        className="logo-animation"
        position={"absolute"}
        zIndex={5}
      >
        <AnimatedLogo sizes={true} />
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
        <Flex
          as={motion.div}
          className="preview-component"
          flexDir={"column"}
          justifyContent="center"
          alignItems="center"
          w="100%"
          h="100%"
          position={"absolute"}
          opacity={0}
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
              h={{ base: "120px", lg: "151px" }}
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
                pos={"relative"}
              >
                <Box
                  ref={logoRef}
                  pos={"absolute"}
                  position={"absolute"}
                  top={{ base: "20px", lg: "35px" }}
                  left={"calc(50% - 20px)"}
                  className="header-logo"
                  opacity={0}
                >
                  <AnimatedLogo />
                </Box>
              </Flex>

              <Box w={"100%"} pos={"absolute"} left={0} bottom={0} h={"1px"}>
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
                opacity={1}
                textTransform={"uppercase"}
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
            opacity={1}
            
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
  );

  return <>{isVisible && preview}</>;
};

export default Preview;

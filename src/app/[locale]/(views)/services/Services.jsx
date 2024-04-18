"use client";

import React from "react";
import {
  Box,
  Text,
  Flex,
  Grid,
  GridItem,
  Img,
  Link as ChakraLink,
  Container,
  useMediaQuery
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const overlay = {
  initial: {
    height: "100%",
    transition: {
      type: "spring",
      duration: 2,
    },
  },
  animate: {
    height: "0",
    transition: {
      type: "spring",
      duration: 2,
    },
  },
};

const Image = {
  initial: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
  animate: {
    scale: 1.2,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
};

const Services = ({ data,params }) => {
  const pathName = usePathname();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  function getTranslatedText(ru,en){
    return params.locale === 'ru' ? ru : en
}

  console.log(data);

  return (
    <Container
      maxW={{ lg: "990px", xl: "container.xl" }}
      h={{ base: "auto", lg: "100%" }}
      minH={{ base: "auto", lg: "100vh" }}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={{ base: "center", lg: "space-between" }}
      padding={{ base: "120px 20px 20px", lg: "120px 0 20px" }}
    >
      <Flex
        direction={"column"}
        justifyContent={{ base: "center", lg: "space-between" }}
        alignItems={"start"}
        flexGrow={1}
      >
        <Text
          fontWeight={400}
          fontSize={20}
          fontFamily={"lora"}
          color={"#fff"}
          lineHeight={"25px"}
          display={{ base: "block", lg: "none" }}
        >
          {getTranslatedText(data.title_ru,data.title_en)}
        </Text>

        <Grid
          templateColumns={{
            base: "repeat(1, minmax(0,1fr))",
            md: "repeat(2, minmax(0, 1fr))",
            lg: `repeat(${Math.min(
              data.services.length,
              5
            )}, minmax(calc(20% - 30px), 1fr))`,
          }}
          justifyContent={{ base: "center", lg: "flex-start" }}
          gap={"30px"}
          w={"fit-content"}
          mt={{ base: "30px", lg: "140px" }}
          as={motion.div}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {data.services.map((item) => (
            <motion.div
              key={item.id}
              exit={{ opacity: 1, scale: 1 }}
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.5,
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                },
              }}
              transition={{
                type: "spring",
                duration: 1,
              }}
            >
              <GridItem
                as={motion.div}
                initial="initial"
                animate="initial"
                whileHover={"animate"}
                whileInView={isMobile ? "animate" : "initial"}
              >
                <ChakraLink
                  as={Link}
                  textDecoration={"none"}
                  href={`${pathName}/${item.slug}`}
                >
                  <Box pb={"10px"}>
                    <Box position={"relative"} overflow={"hidden"}>
                      <Box
                        as={motion.div}
                        variants={overlay}
                        pos={"absolute"}
                        top={"0"}
                        left={"0"}
                        w={"100%"}
                        h={"100%"}
                        bg={"rgba(0, 0, 0, 0.7)"}
                        zIndex={"10"}
                      >
                        {" "}
                      </Box>
                      <Img
                        as={motion.img}
                        variants={Image}
                        src={item.image}
                        alt="portfolio-image"
                        width={"100%"}
                        filter={'grayscale(100%)'}
                        transition={'all .3s ease'}
                        _hover={{ filter: "grayscale(1%)" }}
                        aspectRatio={{ base: "350/380", lg: "1/1" }}
                      />
                    </Box>

                    <Text
                      fontWeight={400}
                      fontSize={"16px"}
                      fontFamily={"lora"}
                      color={"#fff"}
                      textAlign={"center"}
                      lineHeight={"17px"}
                      mt={"16px"}
                    >
                      {getTranslatedText(item.title_ru,item.title_en)}
                    </Text>
                  </Box>
                </ChakraLink>
              </GridItem>
            </motion.div>
          ))}
        </Grid>
        <Text
          fontWeight={"300"}
          fontSize={"16px"}
          fontFamily={"opensans"}
          color={"#fff"}
          textAlign={"center"}
          mt={16}
          w={"100%"}
        >
          SINCE 2012
        </Text>
      </Flex>
    </Container>
  );
};

export default Services;

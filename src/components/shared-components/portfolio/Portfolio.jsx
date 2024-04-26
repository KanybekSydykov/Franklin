"use client";

import React, { useRef } from "react";
import {
  Box,
  Text,
  Flex,
  Grid,
  Img,
  Link as ChakraLink,
  Container,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Portfolio = ({ data, params }) => {
  const pathName = usePathname();
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  function getLink({ name, id }) {
    return `${name.split(" ").join("-").toLowerCase()}_${id}`;
  }

  const { locale } = params;

  const imageAnimation = {
    initial: {
      scale: 1,
      filter: "grayscale(100%)",
      transition: {
        type: "spring",
        duration: 2,
      },
    },
    animate: {
      scale: 1.3,
      filter: "grayscale(1%)",
      transition: {
        type: "spring",
        duration: 1.5,
        delay: isMobile ? 0.5 : 0,
      },
    },
  };

  return (
    <Container
      maxW={"container.xl"}
      h={{ base: "auto", md: "100%" }}
      minH={{ base: "auto", md: "100vh" }}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={{ base: "center", md: "space-between" }}
      alignItems={"center"}
      px={0}
      pt={{ base: "100px", lg: "0px" }}
      pb={"20px"}
    >
      <Flex
        direction={"column"}
        justifyContent={"start"}
        alignItems={"start"}
        p={"40px 20px 70px"}
        w={"100%"}
        mt={{ base: "30px", lg: "120px" }}
      >
        <Text
          fontWeight={400}
          fontSize={20}
          fontFamily={"lora"}
          color={"#fff"}
          lineHeight={"25px"}
          display={{ base: "block", lg: "none" }}
        >
          {locale === "ru" ? data.title : "Portfolio"}
        </Text>

        <Grid
          as={motion.div}
          templateColumns={{
            base: "repeat(1, minmax(0,1fr))",
            md: "repeat(2, 320px)",
            lg: "repeat(3, 300px)",
            xl: "repeat(3, 320px)",
          }}
          gap={{base:'41px',lg:"30px"}}
          mx={"auto"}
          mt={"30px"}
          w={{base:"100%",md:'auto'}}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {data.durations.map((item) => (
            <motion.div
              key={item.name}
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
              <motion.div
                initial={"initial"}
                animate={isMobile ? "animate":"initial"}
                whileHover={isMobile ? "initial":"animate"}
              >
                <ChakraLink
                  as={Link}
                  prefetch={true}
                  textDecoration={"none"}
                  href={`${pathName}/${item.slug}`}
                  className="portfolio-box"
                >
                  <Box overflow={"hidden"}>
                  <Box
                    as={motion.div}
                    width={"100%"}
                    maxW={{base:'100%',lg:"320px"}}
                    objectFit={"cover"}
                    aspectRatio={{ base: "350/380", lg: "320/421" }}
                    variants={imageAnimation}
                    position={'relative'}
                  >
                    <Image src={item.image} loading="eager" alt="portfolio-image" fill style={{objectFit:'cover'}} />
                  </Box>
                  </Box>
                
                  <Text
                    fontWeight={400}
                    fontSize={"14px"}
                    fontFamily={"lora"}
                    color={"#fff"}
                    textAlign={"center"}
                    lineHeight={{ base: "17px", lg: "22px" }}
                    textTransform={"uppercase"}
                    mt={{ base: "16px", lg: "20px" }}
                    width={{ base: "auto", lg: "100%" }}
                    mx={"auto"}
                  >
                    {locale === "ru" ? item.name_ru : item.name_en}
                  </Text>
                </ChakraLink>
              </motion.div>
            </motion.div>
          ))}
        </Grid>
      </Flex>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            duration: 1,
            stiffness: 100,
          },
        }}
      >
        <Text
          fontWeight={"300"}
          fontSize={"16px"}
          fontFamily={"opensans"}
          color={"#fff"}
        >
          SINCE 2012
        </Text>
      </motion.div>
    </Container>
  );
};

export default Portfolio;

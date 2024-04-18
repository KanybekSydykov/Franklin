"use client";

import React, { useRef } from "react";
import {
  Box,
  Text,
  Flex,
  Grid,
  Img as Image,
  Link as ChakraLink,
  Container,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";



const Portfolio = ({ data, params }) => {
  const pathName = usePathname();
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  function getLink({ name, id }) {
    return `${name.split(' ').join('-').toLowerCase()}_${id}`;
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
          {locale === "ru" ? data[0].page.title : "Portfolio"}
        </Text>

        <Grid
          as={motion.div}
          templateColumns={{
            base: "repeat(1, minmax(0,1fr))",
            md: "repeat(3, minmax(0,1fr))",
          }}
          gap={"30px"}
          mx={"auto"}
          className="mt-[30px]"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {data.map((item) => (
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
                animate={"initial"}
                whileHover={"animate"}
                whileInView={isMobile ? "animate" : "initial"}
              >
                <ChakraLink
                  as={Link}
                  textDecoration={"none"}
                  href={`${pathName}/${item.slug}`}
                  className="portfolio-box"
                >
                  <Box width={"100%"} overflow={"hidden"}>
                    <Image
                      as={motion.img}
                      src={item.image}
                      alt="portfolio-image"
                      width={"100%"}
                      maxW={"320px"}
                      objectFit={"cover"}
                      aspectRatio={{ base: "350/380", lg: "320/421" }}
                      variants={imageAnimation}
                    />
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
                    padding={"0 20%"}
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

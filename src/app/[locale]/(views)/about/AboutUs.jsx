"use client";

import React from "react";
import { Container, Flex, Text, Box, Highlight } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Slider from "@/components/shared-components/slider/Slider";
import { useParams } from "next/navigation";
const imgAnimate = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: -0.3,
    },
  },
};

const AboutUs = ({ yText, data }) => {

  const {locale} = useParams()

  function getTitle(){
    return locale === 'ru' ? data.title_ru : data.title_en
  }

  function getParagraphs() {

    const paragraphs = locale === 'ru' ? data.description_ru : data.description_en;

    return paragraphs.split("<p>")
    .filter(Boolean) // Remove any empty strings resulting from the split
    .map((paragraph) => paragraph.replace(/<[^>]*>/g, "").replace("<br />", "\n"));
  }
  
  return (
    <Container
      as={motion.div}
      maxW={"container.xl"}
      minH={"100dvh"}
      width={"100dvw"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      pt={{ base: "100px", lg: "120px" }}
      scrollSnapAlign={"start"}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <Flex
        p={"40px 20px"}
        w={"100%"}
        direction={{ base: "column", lg: "row" }}
        justifyContent={{ base: "start", lg: "space-between" }}
        alignItems={"center"}
        gap={{ base: "40px", lg: "120px" }}
        color={"white"}
      >
        <motion.div
          style={{
            y: yText,
          }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          <motion.div
            transition={{ type: "spring", duration: 0.5 }}
            style={{
              y: yText,
            }}
          >
            <Text
              fontFamily={"lora"}
              fontWeight={400}
              fontSize={{ base: "20px", lg: "30px" }}
              lineHeight={{ base: "25px", lg: "45px" }}
            >
             {getTitle()}
            </Text>
          </motion.div>

          <Flex
            direction={"column"}
            gap={{ base: "16px", lg: "32px" }}
            mt={{ base: "30px", lg: "40px" }}
          >
            {getParagraphs().map((paragraph, index) => (
              <Text
                key={index}
                fontFamily={"opensans"}
                fontWeight={300}
                fontSize={{ base: "16px", lg: "18px" }}
                lineHeight={{ base: "24px", lg: "27px" }}
                color={"rgba(226, 226, 226, 1)"}
              >
                <Highlight
                  query={[
                    "FRANKLIN Design Studio",
                    "FRANKLIN",
                    "Franklin",
                    "franklin",
                  ]}
                  styles={{
                    fontFamily: "lora",
                    fontWeight: 500,
                    fontSize: "18px",
                    lineHeight: "27px",
                    color: "rgba(226, 226, 226, 1)",
                  }}
                >
                  {paragraph}
                </Highlight>
              </Text>
            ))}
          </Flex>
        </motion.div>

        <Box
          as={motion.div}
          variants={imgAnimate}
          initial="initial"
          animate="initial"
          whileInView={"animate"}
          w={"100%"}
          h={"auto"}
          position={"relative"}
          maxH={{ base: "475px", lg: "537px" }}
          height={{ base: "475px", lg: "537px" }}
          width={{ base: "100%", lg: "402px" }}
          minW={{ base: "100%", lg: "402px" }}
        >
          <Slider images={data.slides} alt={data.title} />
        </Box>
      </Flex>
    </Container>
  );
};

export default AboutUs;

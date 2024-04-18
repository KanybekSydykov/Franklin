import React from "react";
import { Box, Flex, Img, Text, Container, Highlight } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Slider from '../slider/Slider'

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
const Philosophy = ({ yText,data,params }) => {

  function getTitle(){
    return params.locale === 'ru' ? data.title_ru : data.title_en
  }
    function getParagraphs() {

      const paragraphs = params.locale === 'ru' ? data.description_ru : data.description_en;
  
      return paragraphs.split("<p>")
      .filter(Boolean) // Remove any empty strings resulting from the split
      .map((paragraph) => paragraph.replace("</p>", "").replace("<br />", "\n"));
    }

  return (
    <Container
      maxW={"container.xl"}
      minH={"100vh"}
      w={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      pt={{ base: "100px", lg: "120px" }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", delay: 0.25 },
          },
        }}
        initial="hidden"
        animate="hidden"
        whileInView="visible"
      >
        <Flex
          direction={{ base: "column", lg: "row-reverse" }}
          gap={"30px"}
          w={'100%'}
          p={"30px 20px 60px"}
        >
          <Flex
            as={motion.div}
            style={{
              y: yText,
            }}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={{ base: "32px", lg: "40px" }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <motion.div
              style={{
                y: yText,
              }}
            >
              <Text
                fontFamily={"lora"}
                fontWeight={500}
                fontSize={{ base: "20px", lg: "28px" }}
                color={"#fff"}
                textAlign={"center"}
                lineHeight={{ base: "30px", lg: "42px" }}
              >
                {data.title}
              </Text>
            </motion.div>

            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              maxW={'620px'}
            >
              <Flex direction={"column"} gap={"24px"}>
                {getParagraphs().map((paragraph, index) => (
                  <Text
                  key={index}
                  fontWeight={300}
                  fontSize={"16px"}
                  fontFamily={"opensans"}
                  color={"#fff"}
                >
                  <Highlight
                    query={"FRANKLIN"}
                    styles={{
                      fontFamily: "lora",
                      fontWeight: 700,
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
            </Flex>
          </Flex>

          <Box
          as={motion.div}
          variants={imgAnimate}
          initial="initial"
          animate="initial"
          whileInView={"animate"}
          src="/portfolio-1.jpeg"
          alt="logo"
          w={"100%"}
          h={"auto"}
          maxH={{ base: "475px", lg: "537px" }}
          minH={{ base: "475px", lg: "537px" }}
          maxW={{ base: "100%", lg: "402px" }}
          minW={{ base: "100%", lg: "402px" }}
        >
          <Slider images={data.slides} alt={data.title} />
        </Box>
        </Flex>
      </motion.div>
    </Container>
  );
};

export default Philosophy;

function CompanyText({ text }) {
  return (
    <Text display={"inline"} fontFamily={"var(--lora)"} fontWeight={400}>
      {text}{" "}
    </Text>
  );
}

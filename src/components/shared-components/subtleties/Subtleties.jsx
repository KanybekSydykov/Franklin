import React from "react";
import {
  Flex,
  Text,
  List,
  ListItem,
  Container,
  Img,
  Box,
} from "@chakra-ui/react";
import FirstLetterUppercase from "../first-letter-uppercase/FirstLetterUppercase";
import Slider from "../slider/Slider";
import { motion } from "framer-motion";

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

const appearance = {
  initial: {
    opacity: 0,
    scale: 1.05,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

const Subtleties = ({ yText, data, params }) => {
  function getTitle() {
    console.log(data.title_en, data.title_ru);

    return params.locale === "ru" ? data.title_ru : data.title_en;
  }
  function getDescription() {
    let description =
      params.locale === "ru" ? data.description_ru : data.description_en;
  
    // Remove HTML tags
    let cleanedText = description.replace(/<[^>]*>/g, "");
  
    // Replace <br> tags with line breaks
    cleanedText = cleanedText.replace(/<br\s*\/?>/gi, "\n");
  
    console.log(cleanedText);
  
    // Split the text by line breaks
    return cleanedText.split("\n").filter(Boolean); // Filter out any empty lines
  }
  
  return (
    <Container
      maxW={"container.xl"}
      minH={"100dvh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      pt={{ base: "100px", lg: "151px" }}
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        gap={"30px"}
        justify={"center"}
        alignItems={"center"}
        w={"100%"}
        padding={"40px 20px"}
      >
        <motion.div
          variants={appearance}
          initial="initial"
          animate="initial"
          whileInView="animate"
        >
          <Flex
            direction={"column"}
            gap={{ base: "20px", lg: "30px" }}
            justify={"center"}
            alignItems={{ base: "center", lg: "flex-start" }}
          >
            <Text
              fontSize={{ base: "20px", lg: "28px" }}
              fontWeight={"500"}
              fontFamily={"lora"}
              color={"#fff"}
              lineHeight={{ base: "30px", lg: "42px" }}
              textAlign={{ base: "center", lg: "left" }}
            >
              {getTitle()}
            </Text>

            <List
              display={"flex"}
              flexDirection={"column"}
              gap={{ base: "40px", lg: "20px" }}
              maxW={'620px'}
            >
              {getDescription().map((item) => (
                <ListItem key={item}>
                  <FirstLetterUppercase text={item} />
                </ListItem>
              ))}
            </List>
          </Flex>
        </motion.div>
        <Box
          as={motion.div}
          style={{
            y: yText,
          }}
          w={"100%"}
          h={"auto"}
          maxH={{ base: "475px", lg: "600px" }}
          maxW={{ base: "100%", lg: "402px" }}
        >
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
            height={{ base: "475px", lg: "537px" }}
            width={{ base: "100%", lg: "402px" }}
            minW={{ base: "100%", lg: "402px" }}
          >
            <Slider images={data.slides} alt={data.title} />
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Subtleties;

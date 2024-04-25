import React from "react";
import { Flex, Text, Container, useMediaQuery } from "@chakra-ui/react";
import PrincipeItem from "./PrincipeItem";
import { motion } from "framer-motion";

const Principes = ({ yText,opacity,scale ,data,params }) => {

  console.log(data);

  const {locale} = params

  const [isMobile] = useMediaQuery("(max-width: 768px)");


const staggerFlex = {
  initial: {
    opacity: isMobile ? 1 : 0,
    y: isMobile ? 100 : 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      type: "spring",
      staggerChildren: 0.3,
    },
  },
};

const titleAnimation = {
  initial: {
    opacity: 0.5,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
}

  
  return (
    <Container
      maxW={"container.xl"}
      minH={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      px={0}
      pt={{ base: "100px", lg: "151px" }}
    >
      <Flex
        direction={"column"}
        gap={{ base: "30px", lg: "70px" }}
        justify={"center"}
        alignItems={"center"}
        paddingTop={"40px"}
        paddingBottom={"50px"}
        width={"100%"}
      >
        <motion.div
        variants={titleAnimation}
        initial="initial"
        animate="initial"
        whileInView="animate"
        style={{
          y: yText,
          opacity:isMobile ? 1 : opacity,
          scale: scale,
          position:'relative',
          zIndex:111
        }}
        transition={{ type: "spring", duration: 0.5 }}
        >
        <Text
          fontSize={{ base: "20px", lg: "28px" }}
          fontWeight={"500"}
          fontFamily={"lora"}
          color={"#fff"}
          lineHeight={{ base: "35px", lg: "42px" }}
          textAlign={"center"}
        
        >
          {locale === "ru" ? data.title_ru : data.title_en}
        </Text>
        </motion.div>
        <Flex
          direction={{ base: "column", lg: "row" }}
          wrap={"wrap"}
          gap={{ base: "30px", lg: "30px" }}
          justify={"center"}
          alignItems={{base:'center',lg:'flex-start'}}
          width={"100%"}
          as={motion.div}
          variants={staggerFlex}
          initial="initial"
          animate="initial"
          whileInView="animate"
        >
          {data.icons.map((item) => (
            <motion.div key={item.id} variants={staggerFlex}>
              <PrincipeItem
                src={`${item.image}`}
                text={locale === "ru" ? item.title_ru : item.title_en}
                description={locale === "ru" ? item.sub_title_ru : item.sub_title_en}
              />
            </motion.div>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Principes;

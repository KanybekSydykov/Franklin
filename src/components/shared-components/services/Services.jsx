"use client";

import React from "react";
import {
  Text,
  Flex,
  Grid,
  Container,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ServiceItem from "./ServiceItem";





const Services = ({ data, params }) => {
  function getTranslatedText(ru, en) {
    return params.locale === "ru" ? ru : en;
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
      padding={{ base: "120px 20px 20px", lg: "151px 0 20px" }}
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
          {getTranslatedText(data.title_ru, data.title_en)}
        </Text>

        <Grid
          templateColumns={{
            base: "repeat(1, minmax(320px,350px))",
            md: "repeat(2, minmax(350px, 360px))",
            lg: `repeat(${Math.min(
              data.services.length,
              5
            )}, minmax(calc(20% - 30px), 1fr))`,
          }}
          justifyContent={{ base: "center", lg: "flex-start" }}
          gap={"30px"}
          w={"fit-content"}
          mt={{ base: "30px", lg: "140px" }}
          mx={"auto"}
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
            <ServiceItem key={item.id} item={item} getTranslatedText={getTranslatedText} />
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

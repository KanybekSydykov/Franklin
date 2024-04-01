import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const PrincipeItem = (item) => {
  return (
    <Flex
      direction={"column"}
      gap={"16px"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      maxWidth={"246px"}
    >
      <Image
        src={item.src}
        alt="logo"
        style={{ borderRadius: "50%" }}
        width={100}
        height={100}
      />

      <Text
        fontFamily={"var(--opensans)"}
        fontWeight={"600"}
        fontSize={"18px"}
        lineHeight={"19.8px"}
        textAlign={"center"}
        color={"#fff"}
      >
        {item.text}
      </Text>
      <Text
        fontFamily={"var(--opensans)"}
        fontWeight={"300"}
        fontSize={"18px"}
        lineHeight={"19.8px"}
        textAlign={"center"}
        color={"#fff"}
      >
        {item.description}
      </Text>
    </Flex>
  );
};

export default PrincipeItem;

"use client";

import React, { useState } from "react";
import { FormControl, Input, Flex, Box } from "@chakra-ui/react";

const Form = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <Flex 
    flexDirection={"column"}
    gap={"30px"}
    w={"100%"}
    >
      <FormControl isInvalid={isError}>
        <Input
          type="text"
          placeholder="Ваше имя"
          value={input}
          onChange={handleInputChange}
          position={"relative"}
          w={"100%"}
          fontFamily={"var(--opensans)"}
          fontWeight={300}
          background={"transparent"}
          border={"none"}
          outline={"none"}
          fontSize={"16px"}
          color={"#fff"}
          _focus={{ outline: "none" }}
        />
        <Box
          mt={"5px"}
          w={"100%"}
          h={"1px"}
          bg={
            "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #C2C2C2 100%)"
          }
        ></Box>
      </FormControl>
      <FormControl isInvalid={isError}>
        <Input
          type="text"
          placeholder="Ваш номер телефона или WhatsApp"
          value={input}
          onChange={handleInputChange}
          position={"relative"}
          w={"100%"}
          fontFamily={"var(--opensans)"}
          fontWeight={300}
          background={"transparent"}
          border={"none"}
          outline={"none"}
          fontSize={"16px"}
          color={"#fff"}
          _focus={{ outline: "none" }}
        />
        <Box
          mt={"5px"}
          w={"100%"}
          h={"1px"}
          bg={
            "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #C2C2C2 100%)"
          }
        ></Box>
      </FormControl>
      <FormControl isInvalid={isError}>
        <Input
          type="text"
          placeholder="Ваше сообщение"
          value={input}
          onChange={handleInputChange}
          position={"relative"}
          w={"100%"}
          fontFamily={"var(--opensans)"}
          fontWeight={300}
          background={"transparent"}
          border={"none"}
          outline={"none"}
          fontSize={"16px"}
          color={"#fff"}
          _focus={{ outline: "none" }}
        />
        <Box
          mt={"5px"}
          w={"100%"}
          h={"1px"}
          bg={
            "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #C2C2C2 100%)"
          }
        ></Box>
      </FormControl>
    </Flex>
  );
};

export default Form;

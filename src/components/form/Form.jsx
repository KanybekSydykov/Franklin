"use client";

import React, { useState } from "react";
import { FormControl, Input, Flex, Box } from "@chakra-ui/react";
import { useParams } from "next/navigation";

const Form = ({ onNameChange, onPhoneChange, onMessageChange }) => {
  const params = useParams();


  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    // Invoke the callback function with the updated name
    onNameChange(newName);
  };

  const handlePhoneChange = (e) => {
    const newPhone = e.target.value.replace(/[^\d+]/g, "");
    setPhone(newPhone);
    // Invoke the callback function with the updated phone number
    onPhoneChange(newPhone);
  };

  const handleMessageChange = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
    // Invoke the callback function with the updated message
    onMessageChange(newMessage);
  };


  return (
    <Flex 
    flexDirection={"column"}
    gap={"30px"}
    w={"100%"}
    maxW = {'350px'}
    >
      <FormControl>
        <Input
          type="text"
          placeholder={`${params.locale === "ru" ? "Ваше имя" : "Your name"}`}
          value={name}
          onChange={handleNameChange}
          position={"relative"}
          w={"100%"}
          fontFamily={"var(--opensans)"}
          fontWeight={300}
          background={"transparent"}
          border={"none"}
          outline={"none"}
          fontSize={"16px"}
          lineHeight={'21px'}
          height={'21px'}
          color={"#fff"}
          _focus={{ outline: "none" }}
          _focusVisible={{ borderColor: "transparent" }}
          _placeholder={{ color: "rgba(239, 239, 239, 1)"}}

        />
        <Box
          w={"100%"}
          h={"1px"}
          bg={
            "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #C2C2C2 100%)"
          }
        ></Box>
      </FormControl>
      <FormControl >
        <Input
          type="tel"
          placeholder={`${params.locale === "ru" ? "Ваш номер телефона или WhatsApp" : "Phone or WhatsApp number"}`}
          value={phone}
          onChange={handlePhoneChange}
          position={"relative"}
          w={"100%"}
          fontFamily={"var(--opensans)"}
          fontWeight={300}
          background={"transparent"}
          border={"none"}
          outline={"none"}
          fontSize={"16px"}
          lineHeight={'21px'}
          height={'21px'}
          color={"#fff"}
          _focus={{ outline: "none" }}
          _focusVisible={{ borderColor: "transparent" }}
          _placeholder={{ color: "rgba(239, 239, 239, 1)"}}


        />
        <Box
          w={"100%"}
          h={"1px"}
          bg={
            "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #C2C2C2 100%)"
          }
        ></Box>
      </FormControl>
      <FormControl >
        <Input
          type="text"
          placeholder={`${params.locale === "ru" ? "Ваше сообщение" : "Leave comment"}`}
          _placeholder={{ color: "rgba(239, 239, 239, 1)"}}
          value={message}
          onChange={handleMessageChange}
          position={"relative"}
          w={"100%"}
          fontFamily={"var(--opensans)"}
          fontWeight={300}
          background={"transparent"}
          border={"none"}
          outline={"none"}
          fontSize={"16px"}
          lineHeight={'21px'}
          height={'21px'}
          color={"#fff"}
          _focus={{ outline: "none" }}
          _focusVisible={{ borderColor: "transparent" }}
        />
        <Box
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

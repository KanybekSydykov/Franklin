"use client";

import React, { useEffect, useState } from "react";
import { FormControl, Input, Flex, Box } from "@chakra-ui/react";
import { motion ,useAnimate} from "framer-motion";
import { useParams } from "next/navigation";
import { type } from "os";

const inputAnimation = {
  initial: {
    x:0,
  },
  animate: {
    x :[0,50,0,-50,0],
  },
}

const Form = ({ onNameChange, onPhoneChange, onMessageChange, isValid,reset }) => {
  const params = useParams();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [scope, animate] = useAnimate();

  const {isValidName,isValidPhone} = isValid

  if(reset){
    setName("")
    setPhone("")
    setMessage("")
  }

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

  useEffect(() => {
   
    if(scope.current !== null){
      if(!isValidName){
      animate('.name',{
        x:[-5,10,-10,5,-5,0],
        transition: {
          duration: 0.5,
          type: "spring",
        }
      })

    }
    if(!isValidPhone){
      animate('.phone',{
        x:[-5,10,-10,5,-5,0],
        transition: {
          duration: 0.5,
          type: "spring",
        }
      })
    }
  }
  },[isValid])


  return (
    <Flex 
    flexDirection={"column"}
    gap={"30px"}
    w={"100%"}
    maxW = {'350px'}
    ref={scope}
    >
      <FormControl
          className="name"
      >
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
          _placeholder={{ color: isValidName ? "rgba(239, 239, 239, 1)" : "#F30000"}}
          

        />
        <Box
          w={"100%"}
          h={"1px"}
          bg={
            `linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, ${isValidName ? "#C2C2C2" : "#F30000"} 100%)`
          }
        ></Box>
      </FormControl>
      <FormControl 
      className="phone"
      >
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
          _placeholder={{ color: isValidPhone ? "rgba(239, 239, 239, 1)" : "#F30000"}}


        />
               <Box
          w={"100%"}
          h={"1px"}
          bg={
            `linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, ${isValidPhone ? "#C2C2C2" : "#F30000"} 100%)`
          }
        ></Box>
      </FormControl>
      <FormControl 
      className="message"
      >
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

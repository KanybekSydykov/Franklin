"use client";

import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Form from "./Form";
import ModalWindow from "../modal/ModalWindow";
import {sendForm} from '@/utils/clientActions'

const FormCover = ({modalProps}) => {
  const [data, setData] = React.useState({
    name: "",
    phone: "",
    message: "",
  });
  const handleNameChange = (name) => {
    console.log("Name changed:", name);
    setData((prev) => ({ ...prev, name }));
  };

  const handlePhoneChange = (phone) => {
    console.log("Phone changed:", phone);
    setData((prev) => ({ ...prev, phone }));
  };

  const handleMessageChange = (message) => {
    console.log("Message changed:", message);
    setData((prev) => ({ ...prev, message }));
  };

  const handleSubmit = async() => {
    const response = await sendForm(data);
    console.log(response);
  };
  return (
    <Flex
      my={"10px"}
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
      px={"20px"}
      mx={"auto"}
      maxW={{ base: "100%", lg: "600px" }}
      gap={{ base: "50px", lg: "30px" }}
    >
      <Form
        onNameChange={handleNameChange}
        onPhoneChange={handlePhoneChange}
        onMessageChange={handleMessageChange}
      />

      <Flex onClick={handleSubmit}>
        <ModalWindow modalProps={modalProps} />
      </Flex>
    </Flex>
  );
};

export default FormCover;

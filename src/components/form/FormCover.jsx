'use client'
import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import Form from "./Form";
import ModalWindow from "../modal/ModalWindow";
import { sendForm } from '@/utils/clientActions';

const FormCover = ({ modalProps }) => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [isValidName, setIsValidName] = useState(true)
  const [isValidPhone, setIsValidPhone] = useState(true)
  const [isValidForm, setIsValidForm] = useState(false)
  const [reset, setReset] = useState(false)

  const handleNameChange = (name) => {
    setData((prev) => ({ ...prev, name }));
    setIsValidName(true)
  };

  const handlePhoneChange = (phone) => {
    setData((prev) => ({ ...prev, phone }));
    setIsValidPhone(true)
  };

  const handleMessageChange = (message) => {
    setData((prev) => ({ ...prev, message }));
    setIsValid(true)
  };

  const handleSubmit = async (e) => {

    // Validate inputs before submitting
    if (!data.name || !data.phone) {
      // Handle validation error
      setIsValidName(false)
      setIsValidPhone(false)
      setIsValidForm(false)
      console.log("Name and phone number are required.");
      return;
    }

    // If inputs are valid, submit the form
    if(isValidName && isValidPhone){
      setIsValidForm(true)
    const response = await sendForm(data);
    if (response.ok ) {
      setReset(true)
    } 
    // Handle response as needed
    }
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
        isValid={{isValidName,isValidPhone}}
        reset={reset}
      />

      <Flex onClick={handleSubmit}>
        <ModalWindow modalProps={modalProps} isValid = {isValidForm} />
      </Flex>
    </Flex>
  );
};

export default FormCover;

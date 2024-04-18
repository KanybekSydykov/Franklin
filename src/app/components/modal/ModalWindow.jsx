"use client";

import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Text,
  Flex,
  Img,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";

const ModalWindow = ({modalProps}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const params = useParams()

  const handleButtonClick = () => {
    onOpen();

    setTimeout(() => {
      onClose();
    }, 3000);
  };



  return (
    <>
      <Button
        as={motion.button}
        onClick={handleButtonClick}
        w={"120px"}
        h={"120px"}
        p={"5px"}
        borderRadius={"50%"}
        bg={"transparent"}
        border={"1px solid #fff"}
        outline={"none"}
        justifyContent={"flex-end"}
        _focus={{ outline: "none" }}
        _hover={{ bg: "transparent" }}
        color={"#fff"}
      >
        <Box>
          <Text
            position={"relative"}
            fontWeight={400}
            fontFamily={"var(--opensans)"}
            fontSize={"16px"}
            color={"#fff"}
            w={"92px"}
            whiteSpace={"pre-wrap"}
            textAlign={"start"}
            _after={{
              content: '""',
              display: "block",
              height: "1px",
              width: "100%",
              background:
                "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #C2C2C2 100%)",
              position: "absolute",
              bottom: "-5px",
              left: "0",
            }}
          >
            {params.locale === "ru" ? "Оставить заявку" : "Leave request"}
          </Text>
        </Box>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} justifyContent={"center"}>
        <ModalOverlay
          background={"rgba(255, 255, 255, 0.5)"}
          backdropFilter={"blur(1px)"}
        />

        <ModalContent
          as={motion.div}
          variants={{
            hidden:{opacity: 0, y: 30},
            visible:{opacity: 1, y: 0},
          }}
          initial='hidden'
          animate= 'visible'
          exit='hidden'
          mt={"20%"}
          background={"var(--main-bg)"}
          p={"20px"}
          mx={"20px"}
        >
          <ModalCloseButton
            w={"32px"}
            h={"32px"}
            bg={"transparent"}
            border={"1px solid #fff"}
            borderRadius={"50%"}
            color={"#fff"}
            ms={"auto"}
          />
          <ModalBody
            h={"350px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            px={"40px"}
          >
            <Flex
              flexDirection={"column"}
              gap={"20px"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Img src={modalProps.icon} w={"60px"} h={"60px"} />

              <Text
                fontFamily={"var(--opensans)"}
                fontWeight={700}
                fontSize={"22px"}
                lineHeight={"30px"}
                textAlign={"center"}
                color={"#fff"}
              >
               {params.locale === "ru" ? modalProps.title : "Thank you for your request!"}
              </Text>
              <Text
                fontFamily={"var(--opensans)"}
                fontWeight={300}
                fontSize={"16px"}
                lineHeight={"24px"}
                textAlign={"center"}
                color={"#fff"}
              >
               {params.locale === "ru" ? modalProps.subtitle : "We will contact you soon!"}
              </Text>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalWindow;

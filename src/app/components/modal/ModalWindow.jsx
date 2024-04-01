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

const ModalWindow = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleButtonClick = () => {
    onOpen();

    setTimeout(() => {
      onClose();
    }, 3000);
  }

  return (
    <>
      <Button
        onClick={ handleButtonClick }
        w={"120px"}
        h={"120px"}
        p={"5px"}
        borderRadius={"50%"}
        bg={"transparent"}
        border={"1px solid #fff"}
        outline={"none"}
        justifyContent={"flex-end"}
        _focus={{ outline: "none" }}
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
            Оставить заявку
          </Text>
        </Box>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} 
        justifyContent={"center"}
      >
        <ModalOverlay
          background={"rgba(255, 255, 255, 0.5)"}
          backdropFilter={"blur(1px)"}
        />
        <ModalContent
          mt={"35%"}
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
              <Img src="/modal-icon.svg" w={"60px"} h={"60px"} />

              <Text
                fontFamily={"var(--opensans)"}
                fontWeight={700}
                fontSize={"22px"}
                lineHeight={"30px"}
                textAlign={"center"}
                color={"#fff"}
              >
                Спасибо
              </Text>
              <Text
                fontFamily={"var(--opensans)"}
                fontWeight={300}
                fontSize={"16px"}
                lineHeight={"24px"}
                textAlign={"center"}
                color={"#fff"}
              >
                Мы свяжемся с Вами в самое ближайшее время
              </Text>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalWindow;

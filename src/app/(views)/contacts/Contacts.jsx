import React from "react";
import {
  Flex,
  Box,
  Text,
  Link as ChakraLink,
  Img,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import Form from "../../components/form/Form";
import ModalWindow from "../../components/modal/ModalWindow";
import { useDisclosure } from "@chakra-ui/react";

const Contacts = () => {
  return (
    <Box py={"30px"}>
      <Text
        fontFamily={"var(--lora)"}
        fontWeight={400}
        fontSize={"20px"}
        textAlign={"center"}
        color={"#fff"}
        lineHeight={"25px"}
      >
        контакты
      </Text>

      <Flex
        mt={"40px"}
        gap={"38px"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex flexDirection={"column"} gap={"10px"}>
          <Text
            fontFamily={"var(--lora)"}
            fontWeight={600}
            fontSize={"18px"}
            textAlign={"center"}
            color={"#fff"}
            lineHeight={"24px"}
          >
            Адрес
          </Text>
          <Text
            fontFamily={"var(--opensans)"}
            fontWeight={300}
            fontSize={"16px"}
            textAlign={"center"}
            color={"#fff"}
            lineHeight={"21px"}
          >
            Толомуша Океева, 39/5, Бишкек, Кыргызстан
          </Text>
        </Flex>

        <Flex flexDirection={"column"} gap={"10px"}>
          <Text
            fontFamily={"var(--lora)"}
            fontWeight={600}
            fontSize={"18px"}
            textAlign={"center"}
            color={"#fff"}
            lineHeight={"24px"}
          >
            Телефон
          </Text>
          <Text
            fontFamily={"var(--opensans)"}
            fontWeight={300}
            fontSize={"16px"}
            textAlign={"center"}
            color={"#fff"}
            lineHeight={"21px"}
          >
            +996 555 070861
          </Text>
        </Flex>

        <Flex flexDirection={"column"} gap={"10px"}>
          <Text
            fontFamily={"var(--lora)"}
            fontWeight={600}
            fontSize={"18px"}
            textAlign={"center"}
            color={"#fff"}
            lineHeight={"24px"}
          >
            E-mail
          </Text>
          <Text
            fontFamily={"var(--opensans)"}
            fontWeight={300}
            fontSize={"16px"}
            textAlign={"center"}
            color={"#fff"}
            lineHeight={"21px"}
          >
            franklin-design-studio@mail.ru
          </Text>
        </Flex>
      </Flex>

      <Flex
        flexDirection={"row"}
        gap={"40px"}
        my={"50px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box w={"32px"} h={"32px"}>
          <Img src="/instagram.svg" w={"100%"} h={"100%"} />
        </Box>
        <Box w={"32px"} h={"32px"}>
          <Img src="/whatsapp.svg" w={"100%"} h={"100%"} />
        </Box>
        <Box w={"32px"} h={"32px"}>
          <Img src="/facebook.svg" w={"100%"} h={"100%"} />
        </Box>
      </Flex>

      <Flex
        my={"10px"}
        justifyContent={"center"}
        alignItems={"center"}
        px={"20px"}
      >
        <Form />
      </Flex>

      <Flex justifyContent={"center"} alignItems={"center"} mt={"50px"}>
        <ModalWindow />
      </Flex>

      <Text
        w={"100%"}
        textAlign={"center"}
        fontFamily={"var(--opensans)"}
        fontWeight={400}
        fontSize={"16px"}
        color={"#fff"}
        mt={"30px"}
      >
        Since 2012
      </Text>
    </Box>
  );
};

export default Contacts;

import React from "react";
import { Box, Flex, Img, Text } from "@chakra-ui/react";
const Philosophy = () => {
  return (
    <>
      <Flex direction={"column"} gap={30} p={"30px 20px 60px"}>
        <Text
          fontFamily={"var(--lora)"}
          fontWeight={500}
          fontSize={20}
          color={"#fff"}
          textAlign={"center"}
          lineHeight={"30px"}
        >
          Философия
        </Text>
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Flex direction={"column"} gap={24}>
            <Box
              display={"inline"}
              fontWeight={300}
              fontSize={"16px"}
              fontFamily={"var(--opensans)"}
              color={"#fff"}
            >
              <CompanyText text={"FRANKLIN"} />
              <Text display={"inline"}>
                относится к пространству с большой чуткостью и уважением.
                Пространство способно осчастливить человека, главное - знать
                секреты такого результата.
              </Text>
            </Box>
            <Box
              display={"inline"}
              fontWeight={300}
              fontSize={16}
              fontFamily={"var(--opensans)"}
              color={"#fff"}
            >
              Благостный результат для <CompanyText text={"FRANKLIN"} /> -
              истинное наслаждение... Интерьер получает необычайно гармоничное
              одеяние с <CompanyText text={"FRANKLIN"} />
              .Наполнение помещения энергией электрических импульсов и потоков
              воды, дыханием воздуха и веянием температуры дает жизнь.
            </Box>
          </Flex>
        </Flex>

        <Img
          src="/video-poster.png"
          alt="logo"
          w={"100%"}
          h={"auto"}
          aspectRatio={"350/466"}
        />
      </Flex>
    </>
  );
};

export default Philosophy;

function CompanyText({ text }) {
  return (
    <Text display={"inline"} fontFamily={"var(--lora)"} fontWeight={400}>
      {text}{" "}
    </Text>
  );
}

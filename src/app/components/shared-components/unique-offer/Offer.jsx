import React from "react";
import { Text, Flex, Box } from "@chakra-ui/react";

const Offer = () => {
  return (
    <Flex direction={"column"} pt={'200px'} justifyContent={"start"} alignItems={"center"} minH={'calc(100vh)'}>
      <Text
        fontFamily={"var(--lora)"}
        fontWeight={"400"}
        fontSize={"18px"}
        textAlign={"center"}
        color={"#fff"}
        lineHeight={"24px"}
        textTransform={"uppercase"}
      >
        Дизайн проектирование жилых помещений
      </Text>

      <Text
      fontFamily={"var(--lora)"}
      fontWeight={"400"}
      fontSize={"16px"}
      textAlign={"center"}
      color={"#fff"}
      lineHeight={"20px"}
      mt={'60px'}
      >FRANKLIN - уникальное предложение</Text>

      <Box pos={"relative"} w={"240px"} h={"240px"} mt={'40px'}>
        <Text 
         fontFamily={"var(--opensans)"}
         fontSize={'12px'}
         fontWeight={400}
         lineHeight={'16.8px'}
         color={"#000"}
         pos={'absolute'}
         top={'calc(50% - 20px)'}
         left={'calc(50% - 31px)'}
         zIndex={3}
         w={'62px'}
         h={'84px'}
         textAlign={"center"}
        >
        скидка 10% к общей
стоимости заказа
        </Text>
        <Flex
          w={"160px"}
          h={"160px"}
          bg={"rgba(176, 176, 176, 0.6)"}
          borderRadius={"50%"}
          pos={"absolute"}
          top={0}
          left={"calc(50% - 80px)"}
          zIndex={1}
          justifyContent={"center"}
          alignItems={"flex-start"}
        >
          <Text
          fontFamily={"var(--opensans)"}
          fontSize={'12px'}
          fontWeight={400}
          lineHeight={'16.8px'}
          color={"#fff"}
          maxW={"100px"}
          textAlign={"center"}
          mt={"20px"}
          >
          Дизайн-проект интерьера с 3Д-моделями
          </Text>
        </Flex>

        <Flex
          w={"160px"}
          h={"160px"}
          bg={"rgba(176, 176, 176, 0.6)"}
          borderRadius={"50%"}
          pos={"absolute"}
          bottom={0}
          left={0}
          justifyContent={"flex-start"}
          alignItems={"center"}

        >
          <Text
          fontFamily={"var(--opensans)"}
          fontSize={'12px'}
          fontWeight={400}
          lineHeight={'16.8px'}
          color={"#fff"}
          ps={"10px"}
          maxW={'60px'}
          wordBreak={'break-word'}
          >
          Комплектация
          </Text>
        </Flex>
        <Flex
          w={"160px"}
          h={"160px"}
          bg={"rgba(176, 176, 176, 0.6)"}
          borderRadius={"50%"}
          pos={"absolute"}
          bottom={0}
          right={0}
          fontFamily={"var(--opensans)"}
          fontSize={'12px'}
          fontWeight={400}
          lineHeight={'16.8px'}
          color={"#fff"}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          <Text
           fontFamily={"var(--opensans)"}
           fontSize={'12px'}
           fontWeight={400}
           lineHeight={'16.8px'}
           color={"#fff"}
           pe={"10px"}
           maxW={'60px'}
          >
          Авторский надзор
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Offer;

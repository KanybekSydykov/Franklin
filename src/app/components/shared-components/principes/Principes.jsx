import React from "react";
import { Flex, Text, Card } from "@chakra-ui/react";
import PrincipeItem from "./PrincipeItem";


const PRINCIPES = [
  {
      id: 1,
      src: "/principe-1.svg",
      text: "Визуальный ряд",
      description: 'Cтильно, четко, вкусно'
  },
  {
      id: 2,
      src: "/principe-2.svg",
      text: "Планировка",
      description: 'Функционально, продуманно, эргономично'
  },
  {
      id: 3,
      src: "/principe-3.svg",
      text: "Проектирование ",
      description: 'Логично, экономично, грамотно'
  },
  {
      id: 4,
      src: "/principe-4.svg",
      text: "Наполнение",
      description: 'Продуманно, технологично, взаимосвязано'
  },
  {
      id: 5,
      src: "/principe-5.svg",
      text: "Концепция ",
      description: 'Индивидуально, эстетично, интересно'
  }

]

const Principes = () => {
  return (
    <Flex
      direction={"column"}
      gap={"30px"}
      justify={"center"}
      alignItems={"center"}
      paddingTop={"40px"}
      paddingBottom={"50px"}
      width={"100%"}
    >
      <Text
        fontSize={"20px"}
        fontWeight={"500"}
        fontFamily={"var(--lora)"}
        color={"#fff"}
        lineHeight={"30px"}
        textAlign={"center"}
      >
        Franklin - принципы
      </Text>
      <Flex
        direction={"column"}
        gap={"36px"}
        justify={"center"}
        alignItems={"center"}
        width={"100%"}
      >
        {PRINCIPES.map((item) => (
          <PrincipeItem
            key={item.id}
            src={item.src}
            text={item.text}
            description={item.description}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Principes;

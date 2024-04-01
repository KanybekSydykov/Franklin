import React from "react";
import { Flex, Text, List, ListItem } from "@chakra-ui/react";
import Image from "next/image";
import FirstLetterUppercase from "../first-letter-uppercase/FirstLetterUppercase";
const DATA = {
  title: "FRANKLIN - тонкости",
  list: [
    "Создание индивидуального проекта с учетом личности и пожелания Заказчика",
    "Предложение только реализуемых идей, с учетом нормативов и особенностей строения",
    "Понимание и проектирование всех инженерных систем и коммуникаций в интерьере",
    "Особое внимание к функциональности и логичности жилого помещения",
    "Знание критериев проектирования жилья премиального сегмента и большой опыт работы в этой сфере",
    "Владение отделочным процессами и надзором",
    "Применение новых тенденций, материалов и оборудования",
    "Разработка интересных и гармоничных концепций интерьера",
  ],
  image: "/subtleties.png",
};

const Subtleties = () => {
  return (
    <Flex
      direction={"column"}
      gap={"30px"}
      justify={"center"}
      alignItems={"center"}
      padding={"40px 20px"}
    >
      <Flex
        direction={"column"}
        gap={"20px"}
        justify={"center"}
        alignItems={"center"}
      >
        <Text
          fontSize={"20px"}
          fontWeight={"500"}
          fontFamily={"var(--lora)"}
          color={"#fff"}
          lineHeight={"30px"}
          textAlign={"center"}
        >
          {DATA.title}
        </Text>

        <List display={"flex"} flexDirection={"column"} gap={'40px'}>
          {DATA.list.map((item) => (
            <ListItem key={item}>
              <FirstLetterUppercase text={item} />
            </ListItem>
          ))}
        </List>
      </Flex>

      <Image
        src={DATA.image}
        alt="subtleties"
        width={300}
        height={300}
        style={{width:'100%', height:'auto',maxWidth:'100%', maxHeight:'450px'}}
        />
    </Flex>
  );
};

export default Subtleties;

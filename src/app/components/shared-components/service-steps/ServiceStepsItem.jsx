import React from "react";
import { Flex, Text, Img, Box } from "@chakra-ui/react";
import FirstLetterUppercase from "../first-letter-uppercase/FirstLetterUppercase";

const ServiceStepsItem = ({ stepItemData }) => {
  return (
    <Flex direction={"column"} gap={"30px"}>
      <Box>
        <Text
          fontFamily={"var(--opensans)"}
          fontWeight={"600"}
          fontSize={"18px"}
          lineHeight={"19.8px"}
          color={"#fff"}
        >
          {stepItemData.title}
        </Text>
        <Flex
          direction={"column"}
          justifyContent={"start"}
          alignItems={"start"}
          gap={"20px"}
          mt={"26px"}
        >
          {stepItemData.list.map((item) => (
            <FirstLetterUppercase key={item} text={item} />
          ))}
        </Flex>
      </Box>

      <Img
        src={stepItemData.image}
        alt="img"
        w={"100%"}
        h={"auto"}
        aspectRatio={1}
      />
    </Flex>
  );
};

export default ServiceStepsItem;

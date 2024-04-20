import React from "react";
import { Flex, Text, Img, Box } from "@chakra-ui/react";
import FirstLetterUppercase from "@/components/shared-components/first-letter-uppercase/FirstLetterUppercase";

const ServiceStepsItem = ({ stepItemData , isOdd,locale }) => {

  function getDescription() {
    let description =
      locale === "ru" ? stepItemData.description_ru : stepItemData.description_en;

    let cleanedText = description.replace(/<\/?p>/g, "");

    cleanedText = cleanedText.replace(/<br\s*\/?>/gi, "");

    // Split the text by line breaks
    return cleanedText.split("\n").filter(Boolean); // Filter out any empty lines
  }

  return (
    <Flex
      direction={{ base: "column", lg: `${isOdd ? "row-reverse" : "row"}` }}
      gap={{ base: "30px", lg: "50px" }}
      justifyContent={{ base: "flex-start", lg: "center" }}
      alignItems={{ base: "start", lg: "center" }}
    >
      <Box w={{ base: "100%", lg: "440px" }}>
        <Text
          fontFamily={"opensans"}
          fontWeight={"600"}
          fontSize={"18px"}
          lineHeight={"19.8px"}
          color={"#fff"}
        >
          {locale === 'ru' ? stepItemData.title_ru : stepItemData.title_en}
          
        </Text>
        <Flex
          direction={"column"}
          justifyContent={"start"}
          alignItems={"start"}
          gap={"20px"}
          mt={"26px"}
        >
          {getDescription().map((item) => (
            <FirstLetterUppercase key={item} text={item} />
          ))}
        </Flex>
      </Box>

      <Img
        src={stepItemData.image}
        alt="img"
        w={{ base: "100%", lg: "190px" }}
        h={{ base: "auto", lg: "190px" }}
        objectFit={"cover"}
        aspectRatio={1}
      />
    </Flex>
  );
};

export default ServiceStepsItem;

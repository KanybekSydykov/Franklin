import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import ServiceStepsItem from "./ServiceStepsItem";

const ServiceStepsContainer = ( {serviceData} ) => {


  return (
    <Box
    p={'60px 20px 80px'}
    >
        <Text
        fontFamily={"var(--lora)"}
        fontWeight={"400"}
        fontSize={"18px"}
        textAlign={"center"}
        color={"#fff"}
        lineHeight={'24px'}
        textTransform={"uppercase"}
        >
        {serviceData.title}
        </Text>

      <Flex
        direction={"column"}
        justifyContent={"start"}
        alignItems={"start"}
        gap={"10px"}
        mt={'60px'}
      >
        <Text
          fontFamily={"var(--opensans)"}
          fontWeight={"700"}
          fontSize={"18px"}
          lineHeight={"24px"}
          color={"#fff"}
        >
          {serviceData.subtitle}
        </Text>
        <Box
          width={"100%"}
          height={"1px"}
          background={
            "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #C2C2C2 100%)"
          }
        ></Box>
      </Flex>
      <Flex
        direction={"column"}
        justifyContent={"start"}
        alignItems={"start"}
        pt={"30px"}
        gap={'40px'}
      >
        {
          serviceData.steps.map((item) => (
            <ServiceStepsItem key={item.title} stepItemData={item} />
          ))
        }
      </Flex>
    </Box>
  );
};

export default ServiceStepsContainer;

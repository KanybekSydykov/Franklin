import React from "react";
import { Flex, Text, Box, Container } from "@chakra-ui/react";
import ServiceStepsItem from "./ServiceStepsItem";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

const ServiceStepsContainer = ({ data }) => {

  const {locale} = useParams()
  return (
    <Container
      maxW={{ lg: "990px", xl: "container.xl" }}
      h={{ base: "auto", lg: "100%" }}
      minH={{ base: "auto", lg: "100vh" }}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={{ base: "center", lg: "space-between" }}
      padding={{ base: "120px 20px 20px", lg: "140px 0px 0px" }}
      overflowY={'auto'}
    >

      <Flex
        direction={"column"}
        justifyContent={"start"}
        alignItems={"start"}
        gap={"10px"}
        mt={"60px"}
        w={{ base: "100%", lg: "680px" }}
        mx={'auto'}
      >
        <Text
          fontFamily={"opensans"}
          fontWeight={"700"}
          fontSize={"18px"}
          lineHeight={"24px"}
          color={"#fff"}
        >
          {locale === 'ru' ? data.title_ru : data.title_en}
   </Text>
        <Box
          width={"100%"}
          height={"1px"}
          background={
            "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #C2C2C2 100%)"
          }
        ></Box>
      </Flex>
      <motion.div
            variants={{
              hidden: { opacity: 0,y:30 },
              visible: { opacity: 1,y:0, transition: { type: "spring",delay:0.25 } },
            }}
            initial="hidden"
            animate="hidden"
            whileInView="visible"
      >
      <Flex
        direction={"column"}
        justifyContent={{ base: "start", lg: "center" }}
        alignItems={{ base: "start", lg: "center" }}
        pt={"30px"}
        pb={"60px"}
        gap={"40px"}
      >
        {data.steps.map((step,idx) => (
          <ServiceStepsItem key={step.id} locale={locale} stepItemData={step} isOdd = {idx % 2 !== 0} />
        ))}
      </Flex>
      </motion.div>
    </Container>
  );
};

export default ServiceStepsContainer;

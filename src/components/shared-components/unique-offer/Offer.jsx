import React from "react";
import { Text, Flex, Box,useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

const Offer = ({data}) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const params = useParams();

  return (
    <Flex
      direction={"column"}
      pt={"200px"}
      justifyContent={"start"}
      alignItems={"center"}
      minH={"calc(100vh)"}
    >
      <motion.div
        variants={{
          hidden: { opacity: 1, y: 300 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", duration: 1.5, },
          },
        }}
        initial="hidden"
        animate="hidden"
        whileInView="visible"
      >
        <Text
          fontFamily={"lora"}
          fontWeight={"400"}
          fontSize={"16px"}
          textAlign={"center"}
          color={"#fff"}
          lineHeight={"20px"}
          mt={{ base: "60px", lg: "80px" }}
        >
         {params.locale === 'ru' ? data.title_ru : data.title_en}
        </Text>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: isMobile ? 100:200 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", duration: 1 },
          },
        }}
        initial="hidden"
        animate="hidden"
        whileInView="visible"
      >
        <Box
          pos={"relative"}
          w={{ base: "240px", lg: "450px" }}
          h={{ base: "240px", lg: "450px" }}
          mt={{ base: "40px", lg: "50px" }}
        >
          <Text
            fontFamily={"opensans"}
            fontSize={{ base: "12px", lg: "16px" }}
            fontWeight={400}
            lineHeight={"16.8px"}
            color={"#000"}
            pos={"absolute"}
            top={{ base: "calc(50% - 20px)", lg: "calc(50% - 30px)" }}
            left={{ base: "calc(50% - 31px)", lg: "calc(50% - 44px)" }}
            zIndex={3}
            w={{ base: "62px", lg: "88px" }}
            h={"84px"}
            textAlign={"center"}
          >
            {params.locale === 'ru' ? data.result_field_ru : data.result_field_en}
          </Text>
          <Flex
            w={{ base: "160px", lg: "300px" }}
            h={{ base: "160px", lg: "300px" }}
            bg={"rgba(176, 176, 176, 0.6)"}
            borderRadius={"50%"}
            pos={"absolute"}
            top={0}
            left={{ base: "calc(50% - 80px)", lg: "calc(50% - 150px)" }}
            zIndex={1}
            justifyContent={"center"}
            alignItems={"flex-start"}
          >
            <Text
              fontFamily={"opensans"}
              fontSize={{ base: "12px", lg: "16px" }}
              fontWeight={400}
              lineHeight={"16.8px"}
              color={"#fff"}
              maxW={{ base: "100px", lg: "200px" }}
              textAlign={"center"}
              mt={{ base: "20px", lg: "60px" }}
            >
              {params.locale === 'ru' ? data.first_field_ru : data.first_field_en}
            </Text>
          </Flex>

          <Flex
            w={{ base: "160px", lg: "300px" }}
            h={{ base: "160px", lg: "300px" }}
            bg={"rgba(176, 176, 176, 0.6)"}
            borderRadius={"50%"}
            pos={"absolute"}
            bottom={0}
            left={0}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Text
              fontFamily={"opensans"}
              fontSize={{ base: "12px", lg: "16px" }}
              fontWeight={400}
              lineHeight={"16.8px"}
              color={"#fff"}
              ps={"10px"}
              maxW={{ base: "75px", lg: "200px" }}
              wordBreak={"break-word"}
            >
                           {params.locale === 'ru' ? data.third_field_ru : data.third_field_en}
            </Text>
          </Flex>
          <Flex
            w={{ base: "160px", lg: "300px" }}
            h={{ base: "160px", lg: "300px" }}
            bg={"rgba(176, 176, 176, 0.6)"}
            borderRadius={"50%"}
            pos={"absolute"}
            bottom={0}
            right={0}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <Text
              fontFamily={"opensans"}
              fontSize={{ base: "12px", lg: "16px" }}
              fontWeight={400}
              lineHeight={"16.8px"}
              color={"#fff"}
              pe={"10px"}
              maxW={{ base: "75px", lg: "200px" }}
            >
              {params.locale === 'ru' ? data.second_field_ru : data.second_field_en}
              
            </Text>
          </Flex>
        </Box>
      </motion.div>
    </Flex>
  );
};

export default Offer;

"use client";
import Slider from "@/components/shared-components/slider/Slider";
import {
  Box,
  Text,
  Grid,
  Flex,
  Img,
  Link as ChakraLink,
  Container,
  AspectRatio,
} from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const ProjectId = ({ data, params }) => {
  function getTranslatedText(ru, en) {
    return params.locale === "ru" ? ru : en;
  }
  return (
    <>
    <Flex
      w={"100%"}
      h={{ base: "auto", lg: "100%" }}
      minH={{ base: "auto", lg: "100vh" }}
      maxH={{ base: "auto", lg: "unset" }}
      overflow={{ base: "visible", lg: "hidden" }}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={{ base: "center", lg: "flex-start" }}
      padding={{ base: "101px 20px 20px", lg: "151px 0 0px" }}
    >
      <Container maxW={"100dvw"} px={{ base: "0" }} position={"relative"}>
        <Container
          display={"flex"}
          justifyContent={"flex-start"}
          px={{ base: "0" ,lg:'20px'}}
          alignItems={"center"}
          w={"100%"}
          h={"66px"}
          maxW={{ lg: "990px", xl: "container.xl" }}
        >
          <ChakraLink
            as={Link}
            prefetch={true}
            href={`/portfolio/${params.Project}`}
            fontFamily={"opensans"}
            fontWeight={300}
            fontSize={16}
            color={"rgba(188, 188, 188, 1)"}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            textDecoration={"none"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
              />
            </svg>
            <Text>
              {getTranslatedText("Назад в ", "Back to ")}{" "}
              "{getTranslatedText(data.duration.name_ru, data.duration.name_en).charAt(0).toUpperCase() + getTranslatedText(data.duration.name_ru, data.duration.name_en).slice(1).toLowerCase()}"
            </Text>
          </ChakraLink>
        </Container>

        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          gap={{ base: "30px", lg: "40px" }}
          maxH={{ base: "auto", lg: "70dvh" }}
          maxW={'1920px'}
          mx={'auto'}
        >
          <AspectRatio
            minW={{ base: "100%", lg: "59%" }}
            maxW={{ base: "100%", lg: "59%" }}
            height={"auto"}
            maxH={{base:'unset',lg:'600px'}}
            aspectRatio={{ base: "350/260"}}
          >
            <Slider images={data.images} arrows={true} />
          </AspectRatio>

          <Flex
            direction={"column"}
            gap={{ base: "45px", lg: "100px" }}
            justify={"flex-start"}
            align={"flex-start"}
            pt={{ base: "0px", lg: "40px" }}
          >
            <Flex direction={"column"} gap={"26px"}>
              <Text
                fontFamily={"opensans"}
                fontWeight={400}
                fontSize={"16px"}
                className="title-head"
                color={"#CBCBCB"}
                textAlign={"start"}
              >
                {getTranslatedText(
                  data.duration.name_ru,
                  data.duration.name_en
                )}
              </Text>
              <Text
                fontFamily={"opensans"}
                fontWeight={{ base: 700, lg: 500 }}
                fontSize={{ base: "18px", lg: "24px" }}
                color={"#fff"}
                textAlign={"start"}
              >
                {getTranslatedText(data.title_ru, data.title_en)}
              </Text>
            </Flex>

            <Flex direction={"column"} gap={"20px"}>
              <Text
                fontFamily={"opensans"}
                fontWeight={600}
                fontSize={{ base: "16px", lg: "18px" }}
                lineHeight={"20px"}
                color={"#fff"}
              >
                {params.locale === "ru" ? "Площадь и Стиль" : "Area and Style"}
              </Text>
              <Text
                fontFamily={"opensans"}
                fontWeight={300}
                fontSize={{ base: "16px", lg: "18px" }}
                lineHeight={"24px"}
                color={"#CBCBCB"}
              >
                {getTranslatedText(data.location_ru, data.location_en)}
              </Text>
            </Flex>

            <Box>
              <Text
                fontFamily={"opensans"}
                fontWeight={300}
                fontSize={{ base: "16px", lg: "18px" }}
                lineHeight={"24px"}
                color={"#CBCBCB"}
                maxW={"335px"}
              >
                {getTranslatedText(data.description_ru, data.description_en)}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Container>

      <Flex
        as={motion.div}
        variants={{
          initial: { opacity: 0, y: 30 },
          animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, type: "spring", delay: 0.5 },
          },
        }}
        initial="initial"
        animate="initial"
        whileInView="animate"
        justifyContent={"center"}
        direction={"column"}
        pt={"16px"}
        align={"center"}
      >
        <Text
          fontWeight={"300"}
          fontSize={"16px"}
          fontFamily={"opensans"}
          color={"#fff"}
        >
          SINCE 2012
        </Text>
      </Flex>
    </Flex>
    </>
  );
};

export default ProjectId;

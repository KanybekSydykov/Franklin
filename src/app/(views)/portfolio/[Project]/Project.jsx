"use client";

import {
  Box,
  Text,
  Grid,
  Flex,
  Img,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Project = ({ link }) => {
  const pathName = usePathname();

  return (
    <Box padding={" 30px 20px "}>
      <ChakraLink
        as={Link}
        href="/portfolio"
        fontFamily={"var(--opensans)"}
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
        <Text>Назад в Портфолио</Text>
      </ChakraLink>

      <Text
        fontFamily={"var(--lora)"}
        fontWeight={400}
        fontSize={20}
        color={"#fff"}
        textAlign={"center"}
        my={"40px"}
      >
        общественные интерьеры
      </Text>

      <Grid templateColumns="repeat(2, minmax(0,1fr))" gap={16}>
        <ChakraLink as={Link} href={`${pathName}/1`}>
          <Img
            src="/portfolio-1.jpeg"
            alt="portfolio-1"
            width={"100%"}
            aspectRatio={1}
          />
        </ChakraLink>
        <ChakraLink as={Link} href={`${pathName}/1`}>
          <Img
            src="/portfolio-1.jpeg"
            alt="portfolio-1"
            width={"100%"}
            aspectRatio={1}
          />
        </ChakraLink>
        <ChakraLink as={Link} href={`${pathName}/1`}>
          <Img
            src="/portfolio-1.jpeg"
            alt="portfolio-1"
            width={"100%"}
            aspectRatio={1}
          />
        </ChakraLink>
        <ChakraLink as={Link} href={`${pathName}/1`}>
          <Img
            src="/portfolio-1.jpeg"
            alt="portfolio-1"
            width={"100%"}
            aspectRatio={1}
          />
        </ChakraLink>
        <ChakraLink as={Link} href={`${pathName}/1`}>
          <Img
            src="/portfolio-1.jpeg"
            alt="portfolio-1"
            width={"100%"}
            aspectRatio={1}
          />
        </ChakraLink>
        <ChakraLink as={Link} href={`${pathName}/1`}>
          <Img
            src="/portfolio-1.jpeg"
            alt="portfolio-1"
            width={"100%"}
            aspectRatio={1}
          />
        </ChakraLink>
      </Grid>
      <Flex
        justifyContent={"center"}
        direction={"column"}
        gap={23}
        mt={"40px"}
        align={"center"}
      >
        <Box>
          <Text
            fontWeight={"300"}
            fontSize={"16px"}
            fontFamily={"var(--opensans)"}
            color={"rgba(180, 180, 180, 1)"}
            lineHeight={"17px"}
            textAlign={"center"}
          >
            Наверх
          </Text>

          <Link href={"#"}>
            <Box
              w={"62px"}
              h={"62px"}
              mt={"16px"}
              cursor={"pointer"}
              rounded={"50%"}
              bg={"transparent"}
              border={"1.5px solid rgba(203, 203, 203, .5)"}
              color={"rgba(203, 203, 203, .5)"}
              textDecoration={"none"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              transition={"all .3s ease"}
              _hover={{
                color: "rgba(255, 255, 255, 1)",
                border: "1.5px solid rgba(203, 203, 203, 1)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-chevron-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                />
              </svg>
            </Box>
          </Link>
        </Box>
        <Text
          fontWeight={"300"}
          fontSize={"16px"}
          fontFamily={"var(--opensans)"}
          color={"#fff"}
        >
          SINCE 2012
        </Text>
      </Flex>
    </Box>
  );
};

export default Project;

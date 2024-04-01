'use client'


import React from "react";
import { Box, Text, Flex, Grid, Img as Image, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";




const Portfolio = ( { data } ) => {

  const pathName = usePathname()

  console.log(pathName);

  return (
    <>
      <Flex
        direction={"column"}
        justifyContent={"start"}
        alignItems={"start"}
        p={"40px 20px 70px"}
      >
        <Text
          fontWeight={400}
          fontSize={20}
          fontFamily={"var(--lora)"}
          color={"#fff"}
          lineHeight={"25px"}
        >
          Портфолио
        </Text>

        <Grid templateColumns={"repeat(1, minmax(0,1fr))"} gap={40} mt={30}>
          {data.map((item) => (
            <ChakraLink as={Link} textDecoration={"none"} href={`${pathName}${item.href}`} key={item.id} >
              <Box>
                <Image
                  src={item.src}
                  alt="portfolio-image"
                  width={"100%"}
                  aspectRatio={"350/380"}
                />
                <Text
                  fontWeight={400}
                  fontSize={16}
                  fontFamily={"var(--lora)"}
                  color={"#fff"}
                  textAlign={"center"}
                  lineHeight={"17px"}
                  mt={16}
                >
                  {item.text}
                </Text>
              </Box>
            </ChakraLink>
          ))}
        </Grid>
      </Flex>
    </>
  );
};

export default Portfolio;

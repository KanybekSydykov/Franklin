import React from "react";
import { Grid, Box, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

const DATA = {
  images: [
    "/last-section-img-1.jpeg",
    "/last-section-img-2.jpeg",
    "/last-section-img-3.jpeg",
  ],
  quote: ' "Роскошь должна быть удобной, иначе это не роскошь" ',
  author: "Коко Шанель",
};

const QuoteSection = ( { UpArrowComponent } ) => {
  return (
    <Flex
      direction={"column"}
      justifyContent={"space-between"}
      minH={"calc(100vh - 90px)"}
    >
      <Box pt={"80px"}>
        <Box px={"20px"}>
          <Text
            fontSize={"18px"}
            fontFamily={"var(--lora)"}
            color={"rgba(223, 223, 223, 1)"}
            fontWeight={"400"}
            textAlign={"center"}
            lineHeight={"27px"}
          >
            {DATA.quote}
          </Text>
          <Text
            fontSize={"16px"}
            fontFamily={"var(--lora)"}
            color={"rgba(223, 223, 223, 1)"}
            fontWeight={"400"}
            textAlign={"center"}
            lineHeight={"24px"}
            mt={"20px"}
          >
            {DATA.author}
          </Text>
        </Box>

        <Grid
          gridTemplateColumns={"repeat(3,minmax(0,1fr))"}
          mt={"40px"}
          gap={"16px"}
        >
          {DATA.images.map((item) => (
            <Image
              key={item}
              src={item}
              alt="img"
              width={500}
              height={500}
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: "auto",
                minHeight: "100%",
                maxHeight: "100%",
              }}
            />
          ))}
        </Grid>
      </Box>

          { UpArrowComponent && <UpArrowComponent /> }
    </Flex>
  );
};

export default QuoteSection;

'use client';
import React,{useRef,useEffect} from "react";
import { Grid, Box, Text, Flex, Container, Img ,useMediaQuery} from "@chakra-ui/react";
import { motion ,useInView} from "framer-motion";
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

const staggerGrid = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      staggerChildren: 0.15,
    },
  },
};

const QuoteSection = ({ UpArrowComponent, scrollTop, data, params }) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  function getQuote() {
    let quote = params.locale === "ru" ? data.title_ru : data.title_en;

    return (quote = quote.replace(/<br\s*\/?>/gi, ""));
  }

  function getAuthor() {
    let description =
      params.locale === "ru" ? data.description_ru : data.description_en;

    return description.replace(/<\/?p>/g, "").replace(/<br\s*\/?>/gi, "");
  }

  useEffect(() => {
  }, [isInView])

  return (
    <Container
      maxW={"container.xl"}
      h={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      pt={{ base: "120px", lg: "151px" }}
    >
      <Flex
        direction={"column"}
        justifyContent={"space-between"}
        minH={{base:'100%',lg:"calc(100vh - 151px)"}}
      >
        <Box pt={{ base: "40px", lg: "80px" }}>
          <Box
            px={"20px"}
            as={motion.div}
            style={{
              y: scrollTop,
            }}
          >
            <Text
              fontSize={{ base: "18px", lg: "22px" }}
              fontFamily={"lora"}
              color={"rgba(223, 223, 223, 1)"}
              fontWeight={{ base: "400", lg: "500" }}
              textAlign={"center"}
              lineHeight={{ base: "27px", lg: "33px" }}
            >
              {getQuote()}
            </Text>
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              fontFamily={"lora"}
              color={"rgba(223, 223, 223, 1)"}
              fontWeight={"400"}
              textAlign={"center"}
              lineHeight={{ base: "24px", lg: "27px" }}
              mt={"20px"}
            >
              {getAuthor()}
            </Text>
          </Box>

          <Grid
            gridTemplateColumns={"repeat(3,minmax(0,1fr))"}
            mt={"40px"}
            gap={{ base: "16px", lg: "30px" }}
            as={motion.div}
            variants={staggerGrid}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            ref={ref}
          >
            {data.images.map((item,index) => (
              <Img
                key={index}
                src={`${item.image}`}
                as={motion.img}
                variants={staggerGrid}
                alt="img"
                width={"100%"}
                height={"auto"}
                minH={"100%"}
                maxH={{ base: "100%", lg: "300px" }}
                objectFit={"cover"}
                maxW={{ base: "100%", lg: "300px" }}
              />
            ))}
          </Grid>
        </Box>

        {UpArrowComponent && <UpArrowComponent />}
      </Flex>
    </Container>
  );
};

export default QuoteSection;

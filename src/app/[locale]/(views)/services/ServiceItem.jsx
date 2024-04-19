import React from 'react'
import {GridItem, Text, Box,Img, Link as ChakraLink, useMediaQuery} from '@chakra-ui/react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const overlay = {
    initial: {
      height: "100%",
      transition: {
        type: "spring",
        duration: 2,
      },
    },
    animate: {
      height: "0",
      transition: {
        type: "spring",
        duration: 2,
      },
    },
  };

  const Image = {
    initial: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 2,
      },
    },
    animate: {
      scale: 1.2,
      transition: {
        type: "spring",
        duration: 2,
      },
    },
  };

const ServiceItem = ({item,getTranslatedText}) => {

  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const pathName = usePathname();


  return (
    <motion.div
    key={item.id}
    exit={{ opacity: 1, scale: 1 }}
    variants={{
      hidden: {
        opacity: 0,
        scale: 0.5,
      },
      visible: {
        opacity: 1,
        scale: 1,
      },
    }}
    transition={{
      type: "spring",
      duration: 1,
    }}
  >
    <GridItem
      as={motion.div}
      initial="initial"
      animate="initial"
      whileHover={"animate"}
      whileInView={isMobile ? "animate" : "initial"}
    >
      <ChakraLink
        as={Link}
        textDecoration={"none"}
        href={`${pathName}/${item.slug}`}
      >
        <Box pb={"10px"}>
          <Box position={"relative"} overflow={"hidden"}>
            <Box
              as={motion.div}
              variants={overlay}
              pos={"absolute"}
              top={"0"}
              left={"0"}
              w={"100%"}
              h={"100%"}
              bg={"rgba(0, 0, 0, 0.7)"}
              zIndex={"10"}
            >
              {" "}
            </Box>
            <Img
              as={motion.img}
              variants={Image}
              src={item.image}
              alt="portfolio-image"
              width={"100%"}
              filter={"grayscale(100%)"}
              transition={"all .3s ease"}
              _hover={{ filter: "grayscale(1%)" }}
              aspectRatio={{ base: "350/380", lg: "1/1" }}
            />
          </Box>

          <Text
            fontWeight={400}
            fontSize={"16px"}
            fontFamily={"lora"}
            color={"#fff"}
            textAlign={"center"}
            lineHeight={"17px"}
            mt={"16px"}
          >
            {getTranslatedText(item.title_ru, item.title_en)}
          </Text>
        </Box>
      </ChakraLink>
    </GridItem>
  </motion.div>
  )
}

export default ServiceItem
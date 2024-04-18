'use client'

import React from 'react'
import {Flex,Box,Text,Link} from '@chakra-ui/react'
import { motion } from "framer-motion";

const UpArrow = () => {
  return (
    <Flex
    direction={"column"}
    gap={{ base: "10px", lg: "40px" }}
    justify={"center"}
    alignItems={"center"}
    pb={"30px"}
  >
    <Box  position={"relative"}
          cursor={"pointer"}
          _hover={{color: '#fff'}}
          >
      <Text
        className="up-arrow"
        fontWeight={"300"}
        fontSize={"16px"}
        fontFamily={"opensans"}
        color={"rgba(180, 180, 180, 1)"}
        lineHeight={"17px"}
        textAlign={"center"}
  
      >
        Наверх
      </Text>

    <motion.button
      whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500  }}
    >

      <Link href={"#"}>
        <Box
          className="up-arrow"
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
    </motion.button>

    </Box>
<motion.div
initial={{ opacity: 0 ,y:30}}
animate={{ opacity: 0 ,y:30}}
whileInView={{ opacity: 1 ,y:0}}
>
<Text
      fontWeight={"300"}
      fontSize={"16px"}
      fontFamily={"opensans"}
      color={"#fff"}
    >
      SINCE 2012
    </Text>
</motion.div>

  </Flex>
  )
}

export default UpArrow
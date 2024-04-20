import React from "react";
import { Flex, Box, Text,List ,ListItem ,Img,Container} from "@chakra-ui/react";
import FirstLetterUppercase from "../first-letter-uppercase/FirstLetterUppercase";
import { motion } from "framer-motion";
import {getDescription} from '@/utils/TextFormatHelpers'
import { useParams } from "next/navigation";

const MaterialEquipmentProcurement = ({ data }) => {

  const params = useParams()

  return (
    <Container
    maxW={{ lg: "990px", xl: "container.xl" }}
    h={{ base: "auto", lg: "100%" }}
    minH={{ base: "auto", lg: "100vh" }}
    display={"flex"}
    flexDirection={"column"}
    justifyContent={{ base: "center", lg: "space-between" }}
    alignItems={{ base: "center", lg: "center" }}
    padding={{ base: "120px 20px 20px", lg: "120px 0 20px" }}
  >
      <Box p={{base:"60px 20px 80px",lg:'0 20px'}} maxW={'680px'}>
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
          justifyContent={"start"}
          alignItems={"start"}
          gap={"10px"}
          mt={{base:'0',lg:"60px"}}
        >
          <Box>
            <Text
              fontFamily={"opensans"}
              fontWeight={"600"}
              fontSize={"18px"}
              lineHeight={"24px"}
              color={"#fff"}
            >
              {params.locale === 'ru' ? data.title_ru : data.title_en}
            </Text>
            <Text
            fontFamily={"opensans"}
            fontWeight={"400"}
            fontSize={"14px"}
            lineHeight={"24px"}
            color={"#E5E5E5"}
            >
              {params.locale === 'ru' ? data.sub_title_ru : data.sub_title_en}

              </Text>
          </Box>
          <Box
            width={"100%"}
            height={"1px"}
            background={
              "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #C2C2C2 100%)"
            }
          ></Box>
        </Flex>

        <List
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"start"}
        alignItems={"start"}
        gap={"20px"}
        mt={'30px'}
        >
            {getDescription(params,data).map((item) => (
              <ListItem key={item}>
                <FirstLetterUppercase text={item} />
              </ListItem>
            ))}
        </List>

        <Text
        fontFamily={"opensans"}
        fontWeight={"600"}
        fontSize={'16px'}
        lineHeight={'27px'}
        color={'#F8F8F8'}
        mt={'26px'}
        >
          {params.locale === 'ru' ? data.bonus_ru : data.bonus_en}
        </Text>
        
        <Flex gap={'30px'} overflow={'hidden'}>
        {data.images.map((item,index) => (
          <Img mt={'30px'} key={index} src={item.image} alt="material-equipment-procurement" width={{base:'100%',lg:'190px'}} height={{base:'auto',lg:'190px' }} aspectRatio={1}  /> 
        ))}


        </Flex>
        </motion.div>
      </Box>
    </Container>
  );
};

export default MaterialEquipmentProcurement;

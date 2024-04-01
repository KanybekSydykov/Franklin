import React from "react";
import { Flex, Box, Text,List ,ListItem ,Img} from "@chakra-ui/react";
import FirstLetterUppercase from "../first-letter-uppercase/FirstLetterUppercase";

const MaterialEquipmentProcurement = ({ sectionTitle, equipmentData }) => {

  return (
    <>
      <Box p={"60px 20px 80px"}>
        <Text
          fontFamily={"var(--lora)"}
          fontWeight={"400"}
          fontSize={"18px"}
          textAlign={"center"}
          color={"#fff"}
          lineHeight={"24px"}
          textTransform={"uppercase"}
        >
          {sectionTitle}
        </Text>

        <Flex
          direction={"column"}
          justifyContent={"start"}
          alignItems={"start"}
          gap={"10px"}
          mt={"60px"}
        >
          <Box>
            <Text
              fontFamily={"var(--opensans)"}
              fontWeight={"600"}
              fontSize={"18px"}
              lineHeight={"24px"}
              color={"#fff"}
            >
              {equipmentData.title}
            </Text>
            <Text
            fontFamily={"var(--opensans)"}
            fontWeight={"400"}
            fontSize={"14px"}
            lineHeight={"24px"}
            color={"#E5E5E5"}
            >{equipmentData.subtitle}</Text>
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
            {equipmentData.list.map((item) => (
              <ListItem key={item}>
                <FirstLetterUppercase text={item} />
              </ListItem>
            ))}
        </List>

        <Text
        fontFamily={"var(--opensans)"}
        fontWeight={"600"}
        fontSize={'16px'}
        lineHeight={'27px'}
        color={'#F8F8F8'}
        mt={'26px'}
        >
          {equipmentData.bonus}
        </Text>
        
        <Img mt={'30px'} src={equipmentData.image} alt="material-equipment-procurement" width={'100%'} height={'auto'} aspectRatio={1}  /> 
      </Box>
    </>
  );
};

export default MaterialEquipmentProcurement;

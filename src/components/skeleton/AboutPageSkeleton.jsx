import React from "react";
import { Box,Skeleton, SkeletonCircle, SkeletonText, Container, Flex } from "@chakra-ui/react";

const AboutPageSkeleton = () => {
  return (
    <>
    <Container
      maxW={"container.xl"}
      minH={"100vh"}
      w={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      pt={{ base: "100px", lg: "120px" }}
    >

        <Flex
          direction={{ base: "column", lg: "row-reverse" }}
          gap={"30px"}
          w={'100%'}
          p={"30px 20px 60px"}
        >
          <Flex
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={{ base: "32px", lg: "40px" }}
          >

            
                <Skeleton w={'100%'} height={'20px'}/>


            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              maxW={'620px'}
            >
              <Flex direction={"column"} gap={"24px"}>
              <Skeleton w={'100%'} maxW={'620px'} height={'320px'} />
              
              </Flex>
            </Flex>
          </Flex>

          <Box
          w={"100%"}
          h={"auto"}
          maxH={{ base: "475px", lg: "537px" }}
          height={{ base: "475px", lg: "537px" }}
          width={{ base: "100%", lg: "402px" }}
          minW={{ base: "100%", lg: "402px" }}
        >
          <Skeleton height='100%' width='100%' />

        </Box>
        </Flex>

    </Container>
    </>
  );
};

export default AboutPageSkeleton;

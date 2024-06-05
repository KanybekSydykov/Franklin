import React from "react";
import { Box,Skeleton, SkeletonCircle, SkeletonText, Container, Flex } from "@chakra-ui/react";

const AboutPageSkeleton = () => {
  return (
    <>
     <Container
      maxW={"container.xl"}
      minH={"100vh"}
      w={"100vw"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      pt={{ base: "100px", lg: "120px" }}
    >

        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={"30px"}
          w={'100%'}
          height={'100%'}
          p={"30px 20px 60px"}
        >
          <Box
          w={"100%"}
          h={"auto"}
          flexGrow={1}
          maxH={{ base: "475px", lg: "537px" }}
          height={{ base: "475px", lg: "537px" }}
          width={{ base: "100%", lg: "402px" }}
          minW={{ base: "100%", lg: "402px" }}
        >
          {/* <Skeleton height='100%' width='100%' /> */}
          <SkeletonText noOfLines={23} spacing='4' skeletonHeight='2' />

        </Box>

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

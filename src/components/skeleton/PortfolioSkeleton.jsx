'use client'

import React from "react";
import { Grid,Box,Skeleton, SkeletonCircle, SkeletonText, Container, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
const PortfolioSkeleton = () => {
  return (
    <>
    <Container
         maxW={{ lg: "990px", xl: "container.xl" }}

      h={{ base: "auto", md: "100%" }}
      minH={{ base: "auto", md: "100vh" }}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={{ base: "center", md: "space-between" }}
      alignItems={"center"}
      px={0}
      pt={{ base: "100px", lg: "0px" }}
      pb={"20px"}
    >
      <Flex
        direction={"column"}
        justifyContent={"start"}
        alignItems={"start"}
        p={"40px 20px 70px"}
        w={"100%"}
        mt={{ base: "30px", lg: "120px" }}
      >
        <h1>
            <Skeleton w={'100%'} height={'20px'} />
        </h1>

        <Grid
          templateColumns={{
            base: "repeat(1, minmax(0,1fr))",
            md: "repeat(3, minmax(0,1fr))",
          }}
          gap={"30px"}
          mx={"auto"}
          mt={"30px"}
          w={"100%"}

        >
          {[0,1,2].map((item) => (

               <Skeleton key={item} w={'100%'} height={'320px'} />

          ))}
        </Grid>
      </Flex>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            duration: 1,
            stiffness: 100,
          },
        }}
      >
      </motion.div>
    </Container>
    </>
  );
};

export default PortfolioSkeleton;

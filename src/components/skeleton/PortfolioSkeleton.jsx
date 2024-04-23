'use client'

import React from "react";
import { Grid,Box,Skeleton, SkeletonCircle, SkeletonText, Container, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
const PortfolioSkeleton = () => {
  return (
    <>
    <Container
      maxW={"container.xl"}
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
          as={motion.div}
          templateColumns={{
            base: "repeat(1, minmax(0,1fr))",
            md: "repeat(3, minmax(0,1fr))",
          }}
          gap={"30px"}
          mx={"auto"}
          mt={"30px"}
          w={"100%"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {[0,1,2].map((item) => (
            <motion.div
              key={item.name}
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
              <motion.div
                initial={"initial"}
                animate={"initial"}
                whileHover={"animate"}
                whileInView={isMobile ? "animate" : "initial"}
              >
               <Skeleton w={'100%'} height={'320px'} />
              </motion.div>
            </motion.div>
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
"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import {
  Link as ChakraLink,
  Flex,
  Grid,
  GridItem,
  Box,
} from "@chakra-ui/react";
import AnimatedLogo from "@/components/animation-components/AnimatedLogo";
import Links from "./Links";
import LocaleSwitcher from "./LocaleSwitcher";
import { motion ,useAnimate} from "framer-motion";
import Image from "next/image";
import { type } from "os";

const Main = ({ data, zIndex, params }) => {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [scope, animate] = useAnimate();


  useEffect(() => {
    if (zIndex) {
      videoRef.current.play();
    }
  }, [zIndex]);

  const handleVideoPlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
      animate(scope.current, { opacity: [1,0] }, { duration: 1.5 });
    } else {
      videoRef.current.pause();
      setIsPaused(true);
      animate(scope.current, { opacity: [0,1] }, { duration: 1.5 });
    }
  };

  const handleVideoSound = () => {
    if (videoRef.current.muted) {
      videoRef.current.muted = false;
      setIsMuted(false);
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <main className={styles.main}>
      <Grid
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        w={"100%"}
        h={{ base: "auto", lg: "100vh" }}
        zIndex={1}
        gridTemplateColumns={{
          base: "repeat(1, minmax(0, 1fr))",
          lg: "40% auto",
        }}
        gridTemplateRows={{ base: "auto", lg: "150px calc(100vh - 150px)" }}
        gap={{ base: "20px", lg: 0 }}
        columnGap={{ base: "0", lg: "calc(10% - 20px)" }}
        p={{ base: "16px 20px 60px", lg: 0 }}
      >
        <GridItem colSpan={1} order={{ base: 1, lg: 2 }}>
          <Flex
            direction={{ base: "column", lg: "row" }}
            justifyContent={{ base: "center", lg: "space-between" }}
            alignItems={"center"}
            gap={{ base: "20px", lg: "0" }}
            pt={{ base: "0", lg: "35px" }}
            pe={{ base: "0", lg: "120px" }}
          >
            <Box position={"relative"}>
              <Box opacity={0}>
                <AnimatedLogo />
              </Box>
              <Box position={"absolute"} top={0} left={0}>
                <AnimatedLogo />
              </Box>
            </Box>

            <Flex
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"5px"}
              bg={"transparent"}
              border={"1px solid rgba(255, 255, 255, 0.2)"}
              display={{ base: "none", lg: "flex" }}
              overflow={"hidden"}
            >
              <LocaleSwitcher />
            </Flex>
          </Flex>
        </GridItem>

        <GridItem
          rowSpan={{ base: 1, lg: 2 }}
          order={{ base: 2, lg: 1 }}
          colSpan={1}
          pos={"relative"}
        >
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            className={styles.video}
            onClick={handleVideoPlay}
          >
            <source src={"/homepage.mp4"} type="video/mp4" />
          </video>
          <Box
            width={"75px"}
            h={"75px"}
            position={"absolute"}
            top={"calc(50% - 40px)"}
            left={"calc(50% - 40px)"}
            zIndex={1}
            onClick={handleVideoPlay}
            opacity={0}
            ref={scope}
          >
            <Image as={motion.img}
              src={isPaused ? "/play-btn.svg" : "/pause-btn.svg"}
              alt="video play button"
              width={100}
              height={100}
              style={{
                width: "100%",
                height: "100%",
                filter: "invert(1)",
              }}
            />
          </Box>

          <Box
            width={"45px"}
            h={"45px"}
            position={"absolute"}
            right={"30px"}
            bottom={"30px"}
            zIndex={1}
            onClick={handleVideoSound}
          >
            <Image
              src={!isMuted ? "sounds-btn.svg" : "muted-btn.svg"}
              alt="video mute button"
              width={100}
              height={100}
              style={{
                width: "100%",
                height: "100%",
                filter: "invert(1)",
              }}
            />
          </Box>
        </GridItem>
        <GridItem
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          mt={{ base: "30px", lg: 0 }}
          colSpan={1}
          order={{ base: 3, lg: 3 }}
        >
          <Flex
            flexDirection={["column", "column", "row"]}
            justifyContent={{ base: "center", lg: "flex-start" }}
            alignItems={"center"}
            w={"100%"}
          >
            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems={"start"}
              className="that"
              w={{ base: "100%", lg: "440px" }}
            >
              {Object.keys(data).map((link, id) => (
                <Links
                  data={data[link]}
                  id={id}
                  key={id}
                  params={params}
                  allData={data}
                />
              ))}
            </Flex>
          </Flex>
        </GridItem>

        <GridItem order={{ base: 4, lg: 4 }}>
          <Flex
            direction={"row"}
            borderRadius={"5px"}
            bg={"transparent"}
            maxW={"125px"}
            mx={"auto"}
            border={"1px solid rgba(255, 255, 255, 0.2)"}
            display={{ base: "flex", lg: "none" }}
            mt={"45px"}
            overflow={"hidden"}
          >
            <ChakraLink
              as={Link}
              href="/ru"
              className={styles.active}
              fontSize={"18px"}
              lineHeight={"24.5px"}
              fontFamily={"opensans"}
              color={"rgba(255, 255, 255, 1)"}
              p={"10px 20px"}
              textDecoration={"none"}
              bg={
                params.locale === "ru"
                  ? "rgba(255, 255, 255, 0.2)"
                  : "transparent"
              }
            >
              РУ
            </ChakraLink>
            <ChakraLink
              as={Link}
              href="/en"
              fontSize={"18px"}
              lineHeight={"24.5px"}
              color={"rgba(255, 255, 255, 1)"}
              p={"10px 20px"}
              textDecoration={"none"}
              fontFamily={"opensans"}
              bg={
                params.locale === "en"
                  ? "rgba(255, 255, 255, 0.2)"
                  : "transparent"
              }
            >
              EN
            </ChakraLink>
          </Flex>
        </GridItem>
      </Grid>
    </main>
  );
};

export default Main;

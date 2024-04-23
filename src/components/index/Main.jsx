import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { Link as ChakraLink, Flex, Grid, GridItem } from "@chakra-ui/react";
import AnimatedLogo from "@/components/animation-components/AnimatedLogo";
import Links from "./Links";

const Main = ({ data,zIndex=-1 ,params}) => {

  return (
    <main className={styles.main}>
      <Grid
        w={"100%"}
        h={{ base: "auto", lg: "100vh" }}
        zIndex={zIndex}
        gridTemplateColumns={{
          base: "repeat(1, minmax(0, 1fr))",
          lg: "40% auto",
          xl: "545px auto",
        }}
        gridTemplateRows={{ base: "auto", lg: "150px calc(100vh - 150px)" }}
        gap={{ base: "20px", lg: 0 }}
        columnGap={{ base: "0", lg: "150px" }}
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
            <AnimatedLogo />
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
              {/* <LocaleSwitcher /> */}
            </Flex>
          </Flex>
        </GridItem>

        <GridItem
          rowSpan={{ base: 1, lg: 2 }}
          order={{ base: 2, lg: 1 }}
          colSpan={1}
        >
          <video
            muted
            autoPlay
            loop
            playsInline
            className={styles.video}
            poster="/video-poster.png"
          >
            <source src={'/homepage_video.mp4'} type="video/mp4" />
          </video>
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
              bg={params.locale === "ru" ? "rgba(255, 255, 255, 0.2)" : "transparent"}
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
              bg={params.locale === "en" ? "rgba(255, 255, 255, 0.2)" : "transparent"}
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

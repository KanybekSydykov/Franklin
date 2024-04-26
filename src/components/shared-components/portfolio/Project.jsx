"use client";

import {
  Box,
  Text,
  Grid,
  Flex,
  Img,
  Link as ChakraLink,
  Container,
  AspectRatio,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Project = ({ data,params }) => {
  const pathName = usePathname();
  const {locale} = params

  const isMobile = useMediaQuery("(max-width: 768px)");

  const overlay = {
    initial: {
      opacity: 0,
      background: "rgba(0,0,0,.5)",
      zIndex: 0,
      fontSize: "8px",
    },
    animate: {
      opacity: 1,
      background: "rgba(0,0,0,.5)",
      zIndex: 3,
      fontSize: "20px",
    },
  };


  const staggerGrid = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        type: "spring",
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <Container
      maxW={{ lg: "990px", xl: "container.xl" }}
      minHeight={{ base: "auto", lg: "100vh" }}
      display={"flex"}
      flexDirection={"column"}
      px={0}
      pt={{ base: "91px", lg: "150px" }}

    >

      <Flex
        padding={{ base: "0px 20px", lg: "0px" }}
        flexDirection={"column"}
        justifyContent={{ base: "center", lg: "space-between" }}
        flexGrow={1}
        position={'relative'}
      >
              <ChakraLink
        as={Link}
        prefetch={true}
        href={`/${locale}/portfolio`}
        fontFamily={"opensans"}
        fontWeight={300}
        fontSize={"16px"}
        color={"rgba(188, 188, 188, 1)"}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        textDecoration={"none"}
        position={"absolute"}
        top={'20px'}
        left={{base:'20px',md:'0',xl:'20px'}}

      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
          />
        </svg>
        <Text>Назад в Портфолио</Text>
      </ChakraLink>
        <Box>
          <Text
            fontFamily={"lora"}
            fontWeight={400}
            fontSize={20}
            color={"#fff"}
            textAlign={"center"}
            mt={{base:"75px",lg:'30px'}}
            mb={{base:'30px',lg:'40px'}}
          >
            {data.name}
          </Text>

          <Grid
            as={motion.div}
            variants={staggerGrid}
            initial="initial"
            whileInView={"animate"}
            templateColumns={{
              base: "repeat(2, minmax(167px,200px))",
              md: "repeat(3, 200px)",
            }}
            gap={{ base: "16px", lg: "20px" }}
            width={'fit-content'}
            mx={{base:'unset',md:'auto'}}
          >
            {data.projects.map((project) => (
              <motion.div
                key={project.title}
                variants={staggerGrid}
         
              >
                <ChakraLink
                  as={Link}
                  href={`${pathName}/${project.slug}`}
                  pos={"relative"}
                  zIndex={"1"}

                >
                  <motion.div
                    initial="initial"
                    animate={isMobile[0] ? "animate" : "initial"}
                    whileHover="animate"
                    whileTap="animate"
                    transition={{ type: "spring", duration: 1 }}
                  >
                    <AspectRatio ratio={1}>

                    <Image
                      src={project.images[0].image}
                      alt="portfolio-1"
                      fill
                    />
                    </AspectRatio>
                    <Flex
                      as={motion.div}
                      variants={overlay}
                      position={"absolute"}
                      top={"0"}
                      left={"0"}
                      w={"100%"}
                      h={"100%"}
                      textAlign={"center"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      color={"white"}
                      fontFamily={'opensans'}
                      fontWeight={600}
                    >
                      {project.title}
                    </Flex>
                  </motion.div>
                </ChakraLink>
              </motion.div>
            ))}
          </Grid>
        </Box>

        {
         data.projects.length > 9 ? 
        <Flex
          justifyContent={"center"}
          direction={"column"}
          gap={{ base: "12px", lg: "16px" }}
          mt={{ base: "40px", lg: "30px" }}
          align={"center"}
        >
          <Box>
            <Text
              fontWeight={"300"}
              fontSize={"16px"}
              fontFamily={"opensans"}
              color={"rgba(180, 180, 180, 1)"}
              lineHeight={"17px"}
              textAlign={"center"}
            >
              Наверх
            </Text>

            <Link href={"#"}>
              <Box
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
                _hover={{
                  color: "rgba(255, 255, 255, 1)",
                  border: "1.5px solid rgba(203, 203, 203, 1)",
                }}
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
          </Box>
          <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0, y: 30 }}
        whileInView={
          {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              duration: 1,
              stiffness: 100,
            },
          }
        }
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
        </Flex> : null
        }
      </Flex>
    </Container>
  );
};

export default Project;

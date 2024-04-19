'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { Text, Flex, Box, Container, Img } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function Error({ error, reset }) {

  const pathname = usePathname();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  console.log(error);

  return (
    <Container
    display={"flex"}
    flexDirection={"column"}
    maxW={"container.xl"}
    minH={"100vh"}
    w={"100%"}
    justifyContent={"center"}
    alignItems={"center"}
    bg={'linear-gradient(0deg, #1F1F1F, #1F1F1F), linear-gradient(0deg, #0A0A0A, #0A0A0A)'}
  >
    <Flex
      w={"100%"}
      h={"100%"}
      flexGrow={1}
      flexDir="column"
      position={"relative"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      overflow={"hidden"}
    >
      <Img
        src={`/error-img.png`}
        alt="404"
        w="168px"
        h="168px"
        position={"absolute"}
        top={0}
        left={"calc(50% - 84px)"}
        zIndex={1}
      />
      <Box
        mt={"140px"}
        w={"807px"}
        h={"600px"}
        bg={
          "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)"
        }
        clipPath={"polygon(46.5% 0, 54% 0, 100% 100%, 0% 100%)"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"40px"}
      >
        <Text
          textTransform={"uppercase"}
          fontFamily={"lora"}
          fontWeight={400}
          fontSize={"130px"}
          lineHeight={"160px"}
          color={"transparent"}
          backgroundImage={
            "linear-gradient(180deg, #FFFFFF -43.48%, rgba(0, 0, 0, 0.26) 213.04%);"
          }
          backgroundClip={"text"}
          textAlign={"center"}
        >
          {error.message}
        </Text>
        <Text
          textTransform={"uppercase"}
          fontFamily={"lora"}
          fontWeight={400}
          fontSize={"23px"}
          lineHeight={"32px"}
          color={"transparent"}
          backgroundImage={
            "linear-gradient(180deg, #FFFFFF -43.48%, rgba(0, 0, 0, 0.26) 213.04%);"
          }
          backgroundClip={"text"}
          textAlign={"center"}
          w={{ base: "95vw", md: "459px" }}
        >
          {pathname.startsWith("/ru")
            ? "к сожалению,эта страница не найдена"
            : "Unfortunately,this page wasn't found"}
        </Text>

        <Link href={pathname.startsWith("/ru") ? "/ru" : "/en"}>
          <Flex
            fontSize={"16px"}
            fontWeight={"400"}
            color={"transparent"}
            fontFamily={"opensans"}
            backgroundImage={
                "linear-gradient(174.44deg, rgba(255, 255, 255, 0.51) -122.15%, rgba(153, 153, 153, 0.12) 230%)"
              }
              backgroundClip={"text"}
            justifyContent={"center"}
            alignItems={"center"}
            w={'120px'}
            h={'120px'}
            borderRadius={"50%"}
            position={'relative'}
            p='1px'
          >
            <Box 
            position={'absolute'}
            top={0}
            left={0}
            w={'100%'}
            h={'100%'}
            backgroundImage={'url("/circle.svg")'}
            />

{pathname.startsWith("/ru")
            ? "Главная"
            : "Home"}
          </Flex>
        </Link>
      </Box>
    </Flex>
  </Container>
  )
}
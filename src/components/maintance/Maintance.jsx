"use client";

import React, { useState } from "react";
import { Text, Flex, Box, Container, Img, Input, FormControl } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { useDisclosure, Button,AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay,FormHelperText } from '@chakra-ui/react'

const Maintance = ({ siteInfo, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const cancelRef = React.useRef();
  const router = useRouter();
  const pathname = usePathname();



  const handleSiteVisibility = () => {

      if(siteInfo.site_password === password){
          setIsVisible(true);
          setPassword("");
      } else {
          setError(true);
          setPassword("");
      }
  }

  if (!siteInfo.technical_works) {
    return (<>{ children}</>);
  } else if(siteInfo.technical_works && isVisible) {
    return (
     <>{children}</>
    );
  } else {
    return (
      <Container
      display={"flex"}
      flexDirection={"column"}
      minH={"100vh"}
      w={"100vw"}
      maxW={"100vw"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={
        "linear-gradient(0deg, #1F1F1F, #1F1F1F), linear-gradient(0deg, #0A0A0A, #0A0A0A)"
      }
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
          _hover={{filter:"sepia(1)", cursor:"pointer"}}
          onClick={onOpen}
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
            {pathname.startsWith("/ru") ? "ТО" : "UM"}
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
              ? "Сайт находится на обслуживании.Попробуйте зайти позже"
              : "Site is under maintance.Try again later"}
          </Text>

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
            w={"120px"}
            h={"120px"}
            borderRadius={"50%"}
            position={"relative"}
            p="1px"
            onClick={() => router.refresh()}
          >
            <Box
              position={"absolute"}
              top={0}
              left={0}
              w={"100%"}
              h={"100%"}
              backgroundImage={'url("/circle.svg")'}
            />

            {pathname.startsWith("/ru") ? "Обновить" : "Refresh"}
          </Flex>
        </Box>
      </Flex>
      <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Администратор metanose
          </AlertDialogHeader>

          <AlertDialogBody>
           <Text>
           Введите пароль Администратора для доступа на сайт
           </Text>
            <FormControl>
           <Input border={`1px solid ${error ? 'red' : 'black'}`} type={'password'} value={password} onChange={(e) => setPassword(e.target.value)}/>
          {error && <FormHelperText color='red' fontSize={'20px'}>
        Неверный пароль
      </FormHelperText>}
            </FormControl>
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Отмена
            </Button>
            <Button colorScheme='red' onClick={handleSiteVisibility} ml={3}>
              Отправить
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
    </Container>
    )
  }
};

export default Maintance;

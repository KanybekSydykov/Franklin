"use client";

import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";


export const links = [
  {
    id: 1,
    title: 'Franklin',
    subtitle: 'О компании',
    href: 'about',
  },
  {
    id: 2,
    title: 'ПОРТФОЛИО',
    subtitle: 'Наши работы',
    href: 'portfolio',
  },
  {
    id: 3,
    title: 'Услуги',
    subtitle: 'Наши услуги',
    href: 'services',
  },
  {
    id: 4,
    title: 'Контакты',
    subtitle: 'Как с нами связаться',
    href: 'contacts',
  },
]


export default function DrawerCover() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();


  return (
    <>
      <Button
        ref={btnRef}
        w={"32px"}
        h={"32px"}
        minH={"32px"}
        minW={"32px"}
        p={"12px 8px"}
        cursor={"pointer"}
        rounded={"50%"}
        bg={"transparent"}
        border={"1px solid rgba(162, 162, 162, 1)"}
        onClick={onOpen}
      >
        <span className="burger"></span>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay bg={"rgba(0,0,0, 0.5)"} />
        <DrawerContent bg={'var(--main-bg)'}>
          <div className="container d-flex row justify-end align-center">
            <DrawerHeader display={"flex"} flexGrow={"1"}>
              <Image
                src="/LOGO-svg.png"
                alt="logo"
                width={30}
                height={30}
                style={{
                  width:'30px',
                  height:'auto',
                  maxHeight:'60px',
                  margin:'0 auto 0 calc(50% - 8px)'
                }}
              />
            </DrawerHeader>
            <DrawerCloseButton
              w={"32px"}
              h={"32px"}
              p={"12px 8px"}
              cursor={"pointer"}
              rounded={"50%"}
              bg={"transparent"}
              color={"#fff"}
              border={"1px solid #fff"}
            />
          </div>

          <DrawerBody
            display={"flex"}
            flexDirection={"column"}
            gap={"50px"}
            flexGrow={"1"}
            justifyContent={"start"}
            alignItems={"center"}
            pt={"110px"}
          >
            {links.map((link) => (
              <ChakraLink
                as={Link}
                href={`/${link.href}`}
                key={link.id}
                fontWeight={"500"}
                fontSize={"22px"}
                fontFamily={"var(--font-lora)"}
                color={"rgba(223, 223, 223, 1)"}
                lineHeight={"28px"}
                textDecoration={"none"}
                onClick={onClose}
              >
                {link.title}
              </ChakraLink>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

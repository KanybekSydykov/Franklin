import React from 'react'
import Image from "next/image";
import { Flex } from "@chakra-ui/react";
import Link from "next/link";



import DrawerCover from '../drawer/DrawerCover';
import Divider from "../Divider/Divider";


const Header = () => {
  return (
   <header>
      <Flex direction={"column"} gap={"5px"} position={"sticky"} top={0} left={0} backdropFilter={'blur(2px)'}>
        <div className='container d-flex row justify-end align-center' >
          <Link href="/" className='logo' >
          <Image src="/LOGO-svg.png" alt="logo" width={100} height={100} />

          </Link>
          <DrawerCover />
        </div>
        <Divider />
      </Flex>
   </header>
  )
}

export default Header

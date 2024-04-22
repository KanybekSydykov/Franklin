"use client";
import React from "react";
import { Flex, useBreakpoint, Link as ChakraLink, Img } from "@chakra-ui/react";
import Link from "next/link";
import DrawerCover from "@/components/shared-components/drawer/DrawerCover";
import Divider from "@/components/shared-components/divider/Divider";

import { useParams,usePathname, useSearchParams } from "next/navigation";
import AnimatedLogo from "../../animation-components/AnimatedLogo";

const links = [
  {
    route: "about",
  },
  {
    route: "portfolio",
  },
  {
    route: "services",
  },
  {
    route: "contacts",
  },
];

const Header = ({data}) => {
  const path = usePathname();
  const breakpoint = useBreakpoint();
  const params = useParams();
  const searchParams = useSearchParams();
  console.log(params,searchParams);



  return (
    <header className="header">
      <Flex
        direction={"column"}
        gap={"5px"}
        position={"sticky"}
        top={0}
        left={0}
        backdropFilter={"blur(2px)"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          direction={"row"}
          justifyContent={{ base: "flex-end", lg: "flex-start" }}
          alignItems={"center"}
          p={{ base: "16px 20px" }}
          w={"100%"}
          maxW={"container.xl"}
          position={"relative"}
          minH={{ base: "100px", lg: "120px" }}
        >
          {!(breakpoint === "base" || breakpoint === "md" || breakpoint === "sm") && (
            <Flex
              direction="row"
              gap="30px"
              alignItems="center"
              justifyContent="center"
            >
              {Object.keys(data).map((title, idx) => {

                console.log(title);
                const isActive = path.startsWith(`/${params.locale}/${links[idx].route}`);
                return (
                  <ChakraLink
                  as={Link}
                  prefetch={true}
                    key={idx}
                    href={`/${path.startsWith('/ru') ? 'ru' : 'en'}/${links[idx].route}`}
                    fontWeight={`${isActive ? "700" : "300"}`}
                    fontFamily={data[title].title.toLowerCase() === 'franklin' ? 'lora' : 'opensans'}
                    fontSize="18px"
                    datatype={isActive ? "active" : "inactive"}
                    lineHeight="23px"
                    color={`rgba(223, 223, 223, 1)`}
                    transition={"all 0.3s ease"}
                    _hover={{ textDecoration: `${isActive ? "none" : "underline"}`, }}
                  >
                    {path.startsWith('/ru') ? data[title].title_ru : data[title].title_en}
                  </ChakraLink>
                );
              })}
            </Flex>
          )}
          <ChakraLink
            as={Link}
            position={"absolute"}
            top={{ base: "20px", lg: "calc(50% - 40px)" }}
            left={"calc(50% - 15px)"}
            href={`/${path.startsWith('/ru') ? 'ru' : 'en'}/`}
          >
            <AnimatedLogo/>
          </ChakraLink>

          {(breakpoint === "base" || breakpoint === "md" || breakpoint === "sm") && (
            <DrawerCover />
          )}
        </Flex>

        <Divider />
      </Flex>
    </header>
  );
};

export default Header;

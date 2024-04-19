"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "../i18n-config";
import { Link as ChakraLink } from "@chakra-ui/react";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const isActive = (locale) => {
    return pathName.startsWith(`/${locale}`);
  };
  const redirectedPathName = (locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <>
      {i18n.locales.map((locale) => {
        return (
          <ChakraLink
            as={Link}
            href={redirectedPathName(locale)}
            key={locale}
            fontSize={"18px"}
            lineHeight={"24.5px"}
            color={"rgba(255, 255, 255, 1)"}
            p={"10px 20px"}
            textDecoration={"none"}
            bg={isActive(locale) ? "rgba(255, 255, 255, 0.2)" : "transparent"}
          >
            {locale === 'ru' ? 'РУ' : 'EN'}
          </ChakraLink>
        );
      })}
    </>
  );
}

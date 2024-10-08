"use client";
import Principes from '@/components/shared-components/principes/Principes';
import Subtleties from "@/components/shared-components/subtleties/Subtleties";
import QuoteSection from "@/components/shared-components/quote/QuoteSection";
import UpArrow from "@/components/shared-components/up-arrow/UpArrow";
import Philosophy from "@/components/shared-components/philosophy/Philosophy";
import AboutUs from "./AboutUs";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import OpacityDiv from "@/components/animation-components/OpacityDiv";
import { useParams, usePathname, useSearchParams } from "next/navigation";


function getChildComponent(name) {
  switch (name) {
    case "quote":
      return QuoteSection;
    case "philosophy":
      return Philosophy;
    case "Icons":
      return Principes;
    case "subtelties":
      return Subtleties;
    case "about":
      return AboutUs;
    default:
      return AboutUs;
  }
}

function getAnimationProps(name) {
  switch (name) {
    case "Icons":
      return { animate: true, negativeY: false };
    case "subtelties":
      return { animate: true };
    case "quote":
      return { animate: false, negativeY: false, UpArrowComponent: UpArrow };
    default:
      return { animate: true, negativeY: true };
  }
}

export default function AboutUsCover({ data ,params}) {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    if (data) {
      const componentNames = data.content_blocks.map((item) => ({
        component: getChildComponent(item.type),
        data: item,
        props: getAnimationProps(item.type),
        params
      }));

      setComponents(componentNames);
    }
  }, [data, params]);

  return (
    <Flex flexDirection={"column"}>
      {components.map((item,index) => (
        <OpacityDiv
          key={item.data.id}
          Component={item.component}
          data={item.data}
          params = {item.params}
          index = {index}
          {...item.props}
        ></OpacityDiv>
      ))}
    </Flex>
  );
}

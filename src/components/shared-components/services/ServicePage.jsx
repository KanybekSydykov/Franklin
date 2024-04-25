"use client";
import ServiceStepsComponents from "@/components/shared-components/services/service-steps/ServiceStepsComponents";
import { Flex, Link as ChakraLink, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import OpacityDiv from "@/components/animation-components/OpacityDiv";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { getChildComponent, getAnimationProps } from "@/utils/componentsFilter";

const ServicePage = ({ data, params }) => {
  const [components, setComponents] = useState([]);

  const path = usePathname();

  useEffect(() => {
    if (data) {
      const groupedComponents = [];
      let currentGroup = [];

      data.content_blocks.forEach((item, index) => {
        const component = getChildComponent(item.type);
        const animationProps = getAnimationProps(
          item.type,
          item.order < data.content_blocks.length
        );

        if (item.type === "equipment" || item.type === "service-plan") {
          currentGroup.push({
            component,
            data: item,
            props: animationProps,
            params,
          });
        } else {
          if (currentGroup.length > 0) {
            groupedComponents.push(currentGroup);
            currentGroup = [];
          }
          groupedComponents.push([
            { component, data: item, props: animationProps, params },
          ]);
        }

        if (
          index === data.content_blocks.length - 1 &&
          currentGroup.length > 0
        ) {
          groupedComponents.push(currentGroup);
        }
      });

      setComponents(groupedComponents);
    }
  }, [data, params]);

  return (
    <Flex
      flexDirection={"column"}
      gap={"120px"}
      justify={"center"}
      position={"relative"}
    >
      <Container
        maxW={"container.xl"}
        minH={"300px"}
        w={"100%"}
        p={{ base: "100px 20px", lg: "151px 20px 0" }}
        position={"fixed"}
        top={'22px'}
        left={0}
        right={0}
        zIndex={10}
      >
        <ChakraLink
          as={Link}
          href={`/${params.locale === "ru" ? "ru" : "en"}/services`}
          color={"rgba(188, 188, 188, 1)"}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={'flex-start'}
          fontFamily={"opensans"}
          fontWeight={300}
          fontSize={"16px"}
          lineHeight={"21px"}
          gap={"10px"}
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
          {params.locale === "ru" ? "Назад в услуги" : "Back to services"}
        </ChakraLink>
      </Container>
      {components.map((componentsArray, index) => (
        <React.Fragment key={index}>
          {componentsArray.length <= 1 ? (
            componentsArray.map((item, itemIndex) => (
              <OpacityDiv
                key={itemIndex}
                Component={item.component}
                data={item.data}
                params={item.params}
                {...item.props}
              />
            ))
          ) : (
            <ServiceStepsComponents
              title={data.title_ru}
              componentsArray={componentsArray}
            />
          )}
        </React.Fragment>
      ))}
    </Flex>
  );
};

export default ServicePage;

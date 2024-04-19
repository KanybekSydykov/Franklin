"use client";
import ServiceStepsComponents from "./ServiceStepsComponents";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import OpacityDiv from "@/components/animation-components/OpacityDiv";
import { usePathname } from "next/navigation";
import React from "react";
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
    <Flex flexDirection={"column"} gap={"120px"}>
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

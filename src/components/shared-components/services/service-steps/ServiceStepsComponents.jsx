'use client'
import React, { useRef } from "react";
import { Text } from "@chakra-ui/react";
import OpacityDiv from "@/components/animation-components/OpacityDiv";
import { motion } from "framer-motion";

const ServiceStepsComponents = ({ componentsArray,title }) => {

  const ref = useRef(null);
  return (
    <>
     
     <Text
        as={motion.p}
        ref={ref}
        initial={{ scale: 1, opacity: 0, y: 300 }}
        animate={{ scale: 1, opacity: 0, y: 300 }}
        whileInView={{
          scale: [2,1],
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            duration: 1,
          },
        }}
        fontFamily={"lora"}
        fontWeight={"400"}
        fontSize={'20px'}
        textAlign={"center"}
        color={"#fff"}
        lineHeight={"24px"}
        textTransform={"uppercase"}
        position={"sticky"}
        py={'7px'}
        px={'20px'}
        background={'transparent'}
        backdropFilter={"blur(2px)"}
        zIndex={2}
        top={{base:'155px',lg:"181px"}}
        className="container-title"
      >
        {componentsArray[0].params.locale === 'ru' ? title.ru : title.en}
      </Text>

      {componentsArray.map((component,index)=>(
        <OpacityDiv key={index} Component={component.component} animations={false}  data={component.data} />
      ))}
    </>
  );
};

export default ServiceStepsComponents;

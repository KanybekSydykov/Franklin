import React, { useRef } from "react";
import { Box, Text } from "@chakra-ui/react";
import OpacityDiv from "@/components/animation-components/OpacityDiv";
import ServiceStepsContainer from "@/components/shared-components/service-steps/ServiceStepsContainer";
import MaterialEquipmentProcurement from "@/components/shared-components/material-equipment-rocurement/MaterialEquipmentProcurement";
import Offer from "@/components/shared-components/unique-offer/Offer";
import { motion, useInView } from "framer-motion";

const ServiceStepsComponents = ({ componentsArray }) => {

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
        textAlign={"center"}
        color={"#fff"}
        lineHeight={"24px"}
        textTransform={"uppercase"}
        position={"sticky"}
        py={'7px'}
        background={'transparent'}
        backdropFilter={"blur(2px)"}
        zIndex={2}
        top={"126px"}
      >
        {componentsArray[0].params.locale === 'ru' ? componentsArray[0].data.title_ru : componentsArray[0].data.title_en}
      </Text>

      {componentsArray.map((component,index)=>(
        <OpacityDiv key={index} Component={component.component} animations={false}  data={component.data} />
      ))}
      {/* <OpacityDiv Component={ServiceStepsContainer} serviceData={serviceData} />
      <OpacityDiv
        Component={MaterialEquipmentProcurement}
        equipmentData={equipmentData}
      />
      <OpacityDiv Component={Offer} /> */}
    </>
  );
};

export default ServiceStepsComponents;

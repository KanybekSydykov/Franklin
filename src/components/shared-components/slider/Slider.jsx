import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Img } from "@chakra-ui/react";
import Image from "next/image";
import { Button, Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const Slider = ({ images, alt, arrows = false }) => {
  return (
    <Box
      as={Splide}
      aria-label="My Favorite Images"
      hasTrack={false}
      options={{
        type: "loop",
        perPage: 1,
        autoplay: true,
        interval: 2000,
        pagination: false,
        speed: 2000,
        arrows: arrows,
        drag:false,
        gap:20
      }}
      w={"100%"}
      h={"100%"}
    >
      <Box as={SplideTrack} w={"100%"} h={"100%"}>
        {images.map((image, index) => (
          <Box as={SplideSlide} w={"100%"} h={"100%"} key={index} >
            <Image
              src={image.image}
              alt={`${alt} image ${index}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </Box>
        ))}
      </Box>

      <Flex
        className="splide__arrows"
        position={"absolute"}
        top={"calc(50% - 20px)"}
        left={"0%"}
        w={"100%"}
        h={"40px"}
        justifyContent={"space-between"}
        zIndex={"100"}
      >
        <Button
          w={"40px"}
          h={"40px"}
          borderRadius={"50%"}
          bg={"rgba(10, 10, 10, 0.7)"}
          justifyContent={"center"}
          alignItems={"center"}
          className="splide__arrow splide__arrow--prev"
          _hover={{ color: "black" }}
          _focus={{ color: "black" }}
        >
          <svg
            width="8"
            height="16"
            viewBox="0 0 8 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.210175 1.242L6.35788 7.48837C6.49272 7.62465 6.56834 7.80863 6.56834 8.00034C6.56834 8.19206 6.49272 8.37603 6.35788 8.51232L0.211509 14.7587C0.0767474 14.8958 0.00123596 15.0804 0.00123596 15.2727C0.00123596 15.4649 0.0767474 15.6495 0.211509 15.7866C0.277341 15.8542 0.356026 15.9078 0.442924 15.9445C0.529822 15.9811 0.623177 16 0.717485 16C0.811793 16 0.905147 15.9811 0.992045 15.9445C1.07894 15.9078 1.15763 15.8542 1.22346 15.7866L7.36984 9.5416C7.77372 9.13026 8 8.57682 8 8.00034C8 7.42387 7.77372 6.87042 7.36984 6.45908L1.22346 0.214045C1.15761 0.146312 1.07884 0.0924715 0.991819 0.0557069C0.904797 0.0189423 0.811286 0 0.716817 0C0.622348 0 0.528839 0.0189423 0.441818 0.0557069C0.354796 0.0924715 0.276029 0.146312 0.210175 0.214045C0.0754137 0.351179 -9.82285e-05 0.535754 -9.82285e-05 0.72802C-9.82285e-05 0.920286 0.0754137 1.10486 0.210175 1.242Z"
              fill="white"
            />
          </svg>
        </Button>

        <Button
          w={"40px"}
          h={"40px"}
          borderRadius={"50%"}
          bg={"rgba(10, 10, 10, 0.7)"}
          justifyContent={"center"}
          alignItems={"center"}
          className="splide__arrow splide__arrow--next"
          _hover={{ color: "black" }}
          _focus={{ color: "black" }}
        >
          <svg
            width="8"
            height="16"
            viewBox="0 0 8 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.210175 1.242L6.35788 7.48837C6.49272 7.62465 6.56834 7.80863 6.56834 8.00034C6.56834 8.19206 6.49272 8.37603 6.35788 8.51232L0.211509 14.7587C0.0767474 14.8958 0.00123596 15.0804 0.00123596 15.2727C0.00123596 15.4649 0.0767474 15.6495 0.211509 15.7866C0.277341 15.8542 0.356026 15.9078 0.442924 15.9445C0.529822 15.9811 0.623177 16 0.717485 16C0.811793 16 0.905147 15.9811 0.992045 15.9445C1.07894 15.9078 1.15763 15.8542 1.22346 15.7866L7.36984 9.5416C7.77372 9.13026 8 8.57682 8 8.00034C8 7.42387 7.77372 6.87042 7.36984 6.45908L1.22346 0.214045C1.15761 0.146312 1.07884 0.0924715 0.991819 0.0557069C0.904797 0.0189423 0.811286 0 0.716817 0C0.622348 0 0.528839 0.0189423 0.441818 0.0557069C0.354796 0.0924715 0.276029 0.146312 0.210175 0.214045C0.0754137 0.351179 -9.82285e-05 0.535754 -9.82285e-05 0.72802C-9.82285e-05 0.920286 0.0754137 1.10486 0.210175 1.242Z"
              fill="white"
            />
          </svg>
        </Button>
      </Flex>
    </Box>
  );
};

export default Slider;

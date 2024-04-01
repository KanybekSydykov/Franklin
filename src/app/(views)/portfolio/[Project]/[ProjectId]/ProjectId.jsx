import {
  Box,
  Text,
  Grid,
  Flex,
  Img,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";

const ProjectId = ({ link }) => {
  return (
    <Box padding={" 30px 20px "}>
      <ChakraLink
        as={Link}
        href={`/portfolio/${link}`}
        fontFamily={"var(--opensans)"}
        fontWeight={300}
        fontSize={16}
        color={"rgba(188, 188, 188, 1)"}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        textDecoration={"none"}
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
        <Text>Назад в {link}</Text>
      </ChakraLink>

      <Img
        src="/portfolio-1.jpeg"
        alt="portfolio-1"
        width={"100%"}
        my={"40px"}
        height={"auto"}
        aspectRatio={"350/260"}
      />

      <Flex direction={"column"} gap={45} justify={'flex-start'} align={'flex-start'} >  
        <Flex direction={"column"} gap={26}>
          <Text
            fontFamily={"var(--lora)"}
            fontWeight={400}
            fontSize={16}
            color={"#CBCBCB"}
            textAlign={"start"}
          >
            общественные интерьеры
          </Text>
          <Text
            fontFamily={"var(--lora)"}
            fontWeight={700}
            fontSize={18}
            color={"#fff"}
            textAlign={"start"}
            textTransform={"uppercase"}
          >
            проект “газпром”
          </Text>
        </Flex>

        <Flex direction={"column"} gap={20}>
          <Text
            fontFamily={"var(--opensans)"}
            fontWeight={600}
            fontSize={16}
            lineHeight={'20px'}
            color={"#fff"}
          >
            Локация
          </Text>
          <Text
            fontFamily={"var(--opensans)"}
            fontWeight={300}
            fontSize={16}
            lineHeight={'24px'}
            color={"#CBCBCB"}
          >
            ГУМ, Бишкек
          </Text>
        </Flex>

        <Box>
          <Text
            fontFamily={"var(--opensans)"}
            fontWeight={300}
            fontSize={16}
            lineHeight={'24px'}
            color={"#CBCBCB"}
          >
            Внимание к деталям: мелочи делают дизайн интерьера идеальным.
            Уделите внимание каждой детали, от выбора мебели до цвета стен.
          </Text>
        </Box>
      </Flex>

      <Flex
        justifyContent={"center"}
        direction={"column"}
        mt={"40px"}
        align={"center"}
      >
        <Text
          fontWeight={"300"}
          fontSize={"16px"}
          fontFamily={"var(--opensans)"}
          color={"#fff"}
        >
          SINCE 2012
        </Text>
      </Flex>
    </Box>
  );
};

export default ProjectId;

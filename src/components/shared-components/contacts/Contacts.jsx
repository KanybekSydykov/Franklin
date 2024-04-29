import React from "react";
import {
  Flex,
  Box,
  Text,
  Link as ChakraLink,
  Img,
  Button,
  Container,
} from "@chakra-ui/react";
import Link from "next/link";
import FormCover from "@/components/form/FormCover";

const Contacts = ({ data, params }) => {
  const { locale } = params;

  console.log(data);

  return (
    <Container
      maxW={{ lg: "990px", xl: "container.xl" }}
      h={{ base: "auto", lg: "100%" }}
      minH={{ base: "auto", lg: "100vh" }}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={{ base: "center", lg: "space-between" }}
      padding={{ base: "120px 20px 20px", lg: "151px 0 20px" }}
    >
      <Box>
        <Text
          mt={{ base: "30px", lg: "50px" }}
          fontFamily={"lora"}
          fontWeight={400}
          fontSize={{ base: "20px", lg: "30px" }}
          textAlign={"center"}
          color={"#fff"}
          lineHeight={{ base: "25px", lg: "38px" }}
        >
          {locale === "ru" ? data.title_ru.toUpperCase() : data.title_en.toUpperCase()}
        </Text>

        <Flex
          mt={"30px"}
          gap={"25px"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {data.addresses.map((item, id) => (
            <Flex flexDirection={"column"} gap={"20px"} key={id}>
              <Text
                fontFamily={"opensans"}
                fontWeight={600}
                fontSize={"18px"}
                textAlign={"center"}
                color={"#fff"}
                lineHeight={"24px"}
              >
                {locale === "ru" ? "Адрес" : "Address"}
              </Text>
              <Text
                fontFamily={"opensans"}
                fontWeight={300}
                fontSize={{base:"16px",lg:"18px"}}
                textAlign={"center"}
                color={"#fff"}
                lineHeight={"24px"}
              >
                {locale === "ru" ? item.address_ru : item.address_en}
              </Text>
            </Flex>
          ))}

          {data.phones.map((item, id) => (
            <Flex key={id} flexDirection={"column"} gap={"20px"}>
              <Text
                fontFamily={"opensans"}
                fontWeight={600}
                fontSize={"18px"}
                textAlign={"center"}
                color={"#fff"}
                lineHeight={"24px"}
              >
                {locale === "ru" ? "Телефон" : "Phone"}
              </Text>
              <Text
                fontFamily={"opensans"}
                fontWeight={300}
                fontSize={"16px"}
                textAlign={"center"}
                color={"#fff"}
                lineHeight={"21px"}
              >
                {item.phone}
              </Text>
            </Flex>
          ))}

          {data.emails.map((item, id) => (
            <Flex key={id} flexDirection={"column"} gap={"20px"}>
              <Text
                fontFamily={"opensans"}
                fontWeight={600}
                fontSize={"18px"}
                textAlign={"center"}
                color={"#fff"}
                lineHeight={"24px"}
              >
                E-mail
              </Text>
              <Text
                fontFamily={"opensans"}
                fontWeight={300}
                fontSize={"16px"}
                textAlign={"center"}
                color={"#fff"}
                lineHeight={"21px"}
              >
                {item.email}
              </Text>
            </Flex>
          ))}
        </Flex>

        <Flex
          flexDirection={"row"}
          gap={"40px"}
          my={{ base: "50px", lg: "50px" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {data.social_links.map((item, id) => (
            <ChakraLink
              as={Link}
              key={id}
              href={item.link}
              target="_blank"
              w={"32px"}
              h={"32px"}
            >
              <Img src={item.icon} w={"100%"} h={"100%"} />
            </ChakraLink>
          ))}
        </Flex>

        <Box>
          <FormCover
            modalProps={{
              title: data.pop_message,
              icon: data.pop_icon,
              subtitle: data.pop_title,
            }}
          />
        </Box>
        <Text
          w={"100%"}
          textAlign={"center"}
          fontFamily={"opensans"}
          fontWeight={400}
          fontSize={"16px"}
          color={"#fff"}
          mt={"30px"}
        >
          SINCE 2012
        </Text>
      </Box>
    </Container>
  );
};

export default Contacts;

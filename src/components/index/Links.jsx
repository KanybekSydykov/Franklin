
import {Flex,Text,Box,Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

const routes = ['about','portfolio','services','contacts']

export default function LinkContent({ data ,params,id}) {

  const { locale } = params;

  // console.log(data , id);

    return (
      <>
        <ChakraLink
                    as={Link}
                    prefetch={true}
                    textDecoration={"none"}
                    href={{pathname:`/${routes[id]}`}}
                    w={"100%"}
                    _hover={{ textDecoration: "none", color: "#fff" }}
                  >
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          w={"100%"}
          color={'rgba(255, 255, 255, 0.3)'}
          _hover={{ textDecoration: "none", color: "#fff" }}
          transition={"all 0.3s ease"}
        >
          <Flex
            direction={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            w={"100%"}
            gap={'10px'}
  
  
          >
            <Text
              fontSize={{ base: '71px', lg: '116px' }}
              lineHeight={{ base: '97px', lg: '158px' }}
              textAlign={'center'}
              fontWeight={400}
              w={{ base: '40px', lg: '70px' }}
              pt={'10px'}
              fontFamily={'cinzel'}
            >
              {++id}
            </Text>
            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems={"start"}
              w={"100%"}
              h={"100%"}
            >
              <Text
                fontSize={{ base: '38px', lg: '50px' }}
                lineHeight={{ base: '48px', lg: '64px' }}
                fontWeight={400}
                fontFamily={'lora'}
  
              >
                {locale === 'ru' ? data.title_ru : data.title_en}
              </Text>
              <Text
                fontSize={{ base: '20px', lg: '20px' }}
                fontWeight={300}
                lineHeight={{ base: '21px', lg: '27px' }}
                fontFamily={'noto'}
              >
                {locale === 'ru' ? data.sub_title_ru : data.sub_title_en}
              </Text>
            </Flex>
          </Flex>
          {id === 4 ? '' : <Box
            w={'100%'}
            h={'1px'}
            bg={'linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%)'}
          ></Box>}
        </Flex>
        </ChakraLink>
      </>
  
    );
  }
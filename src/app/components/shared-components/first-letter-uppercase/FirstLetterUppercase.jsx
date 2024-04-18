import React from 'react'
import { Text } from '@chakra-ui/react'

const FirstLetterUppercase = ({text}) => {
  return (
    <Text
    className="first-letter_services"
    fontFamily={"opensans"}
    fontWeight={"300"}
    fontSize={{ base: "16px", lg: "18px" }}
    lineHeight={{ base: "24px", lg: "27px" }}
    color={"#E6E6E6"}
  >
    {text}
  </Text>
  )
}

export default FirstLetterUppercase
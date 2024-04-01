import React from 'react'
import { Text } from '@chakra-ui/react'

const FirstLetterUppercase = ({text}) => {
  return (
    <Text
    className="first-letter_services"
    fontFamily={"var(--opensans)"}
    fontWeight={"300"}
    fontSize={"16px"}
    lineHeight={"24px"}
    color={"#E6E6E6"}
  >
    {text}
  </Text>
  )
}

export default FirstLetterUppercase
// app/providers.tsx
'use client'

import { Open_Sans, Lora, Cinzel, Noto_Sans } from "next/font/google";
import { ChakraProvider ,extendTheme} from '@chakra-ui/react'

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
})

const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-opensans",
})

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cinzel",
})

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: "--font-noto",
})

  const theme = extendTheme({
    fonts: {
      lora: lora.style.fontFamily,
      opensans: opensans.style.fontFamily,
      cinzel: cinzel.style.fontFamily,
      noto: noto.style.fontFamily,
    },
  })


export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
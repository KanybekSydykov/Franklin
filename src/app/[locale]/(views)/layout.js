import { Open_Sans, Lora, Cinzel, Noto_Sans } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/shared-components/header/Header";
import {getData} from '@/utils/serverActions'
import {API_BASE_URL, API_ENDPOINTS} from '@/api/apiConfig'



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


export default async function AboutLayout({ children,params }) {
  'use server'
  const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.PAGES}`)
  const data = await res.json()

  return (
    <section className={`section-snap ${lora.variable} ${opensans.variable} ${cinzel.variable} ${noto.variable}`} style={{ minHeight: '100vh', position: 'relative' }}>

    <Header data={data} />
      {
        children
      }
    </section>
  );
}

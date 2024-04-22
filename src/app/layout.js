import { Providers } from "./Theme.tsx";
import "@/app/globals.css";
import { getData } from '@/utils/serverActions'
import { API_BASE_URL, API_ENDPOINTS } from '@/api/apiConfig'
import Maintance from '@/components/maintance/Maintance'
import Head from 'next/head'

import { i18n, Locale } from "@/i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
export async function generateMetadata({ params, searchParams }, parent) {
  // read route params

  // fetch data
  const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.PAGES}`)
  const meta = await res.json()

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: meta['about_page'].meta_title,
    description: meta['about_page'].meta_description,
    openGraph: {
      description: meta['about_page'].meta_description,
      title: meta['about_page'].meta_title,
      images: [{ url: meta['about_page'].meta_image }, ...previousImages],
    },
  }
}


export const dynamic = 'force-static'


export default async function RootLayout({ children,params, }) {

  const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.PAGES}`)
  const data = await res.json()

  const res2 = await fetch(`${API_BASE_URL}${API_ENDPOINTS.SITE_INFO}`)
  const siteInfo = await res2.json()



  return (
    <html lang={params.locale}  >
      <body className={`body`}>
        <Providers>
          <Maintance siteInfo={siteInfo} >
            {children}
          </Maintance>
        </Providers>

      </body>
    </html>
  )



}
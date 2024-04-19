import { Providers } from "./Theme.tsx";
import "./globals.css";
import { getData } from '@/utils/serverActions'
import { API_BASE_URL, API_ENDPOINTS } from '@/api/apiConfig'
import Maintance from './Maintance.jsx'

import { i18n, Locale } from "../i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.id

  // fetch data
  const meta = await getData(API_BASE_URL, API_ENDPOINTS.SITE_INFO)

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: meta.meta_title,
    description: meta.meta_description,
    openGraph: {
      description: meta.meta_description,
      title: meta.meta_title,
      images: [{ url: meta.meta_image }, ...previousImages],
    },
  }
}




export default async function RootLayout({ children,params, }) {

  'use server'
  const data = await getData(API_BASE_URL, API_ENDPOINTS.SITE_INFO)


  return (
    <html lang={params.locale}  >
      <body className={`body`}>
        <Providers>
          <Maintance siteInfo={data}>
            {children}
          </Maintance>
        </Providers>

      </body>
    </html>
  )



}
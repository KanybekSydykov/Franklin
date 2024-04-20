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

  const data = await getData(API_BASE_URL, API_ENDPOINTS.SITE_INFO)
  const aboutPageData = await getData(API_BASE_URL,API_ENDPOINTS.ABOUT)
  const contactsData = await getData(API_BASE_URL,API_ENDPOINTS.CONTACTS)
  const portfolioDuration = await getData(API_BASE_URL, API_ENDPOINTS.PORTFOLIO_DURATION);
  const servicePage = await getData(API_BASE_URL, `${API_ENDPOINTS.SERVICE_PAGE}`)


  return (
    <html lang={params.locale}  >
      <Head>
      <link rel='icon' href={data.meta_image} />
      </Head>
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
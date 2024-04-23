import React, { Suspense } from 'react'
import MainCover from '@/components/index/MainCover'
import { API_BASE_URL, API_ENDPOINTS } from '@/api/apiConfig'
import { getData } from '@/utils/serverActions'
import AboutPageSkeleton from '@/components/skeleton/AboutPageSkeleton'

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
      images: [{url:meta.meta_image}, ...previousImages] ,
    },
  }
}
// async function getAllData() {
//   const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.PAGES}`)
//   const pages = await res.json()

//   const res2 = await fetch(`${API_BASE_URL}${API_ENDPOINTS.VIDEO}`)
//   const videoHomePage = await res2.json()
//   const res3 = await fetch(`${API_BASE_URL}${API_ENDPOINTS.VIDEO_PRELOADER}`)
//   const videoPreloader = await res3.json()
//   const res4 = await fetch(`${API_BASE_URL}${API_ENDPOINTS.PRELOAD}`)
//     const componentPreload = await res4.json()
  
//     const data = {
//       pages,
//       videoHomePage,
//       videoPreloader,
//       componentPreload,
//     }
  
//     return data
//   }

export const dynamic = 'force-static'
const page = async({params}) => {

  const res = await fetch(`https://franklin.tatadev.pro/api/v1/pages/`)

    const data = await res.json()
    

  return (
    <>
       <Suspense fallback={<AboutPageSkeleton />}>
       <MainCover data={data} params={params} />
      </Suspense>
    </>
  )
}

export default page
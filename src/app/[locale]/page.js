import React, { Suspense } from 'react'
import MainCover from '@/components/index/MainCover'
import { API_BASE_URL, API_ENDPOINTS } from '@/api/apiConfig'
import { getData } from '@/utils/serverActions'
import AboutPageSkeleton from '@/components/skeleton/AboutPageSkeleton'

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id

  const meta = await getData(API_BASE_URL, API_ENDPOINTS.SITE_INFO)

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

export const dynamic = 'force-static'
const page = async({params}) => {

  const res = await fetch(`https://franklin.tatadev.pro/api/v1/pages/`,{
    cache: 'force-cache'
  })

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
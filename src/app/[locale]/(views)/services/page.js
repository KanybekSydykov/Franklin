import React, { Suspense } from 'react'
import Services from '@/components/shared-components/services/Services'
import { API_BASE_URL, API_ENDPOINTS } from '@/api/apiConfig';
import { getData } from '@/utils/serverActions';
import HomePageSkeleton from '@/components/skeleton/HomePageSkeleton';

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.id

  // fetch data
  const product = await getData(API_BASE_URL, `${API_ENDPOINTS.SERVICE_PAGE}`)

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: product[0].meta_title,
    description: product[0].meta_description,
    icons: {
      icon: [
        {
          url: product[0].meta_image,
        },
      ],
    },
    openGraph: {
      description: product[0].meta_description,
      title: product[0].meta_title,
      images: [{ url: product[0].meta_image }, ...previousImages],
    },
  }
}
export const dynamic = 'force-static'


const Page = async ({ params }) => {
  const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.PAGES}`)
  console.log('fetching data in contacts again');

  const data = await res.json()

  return (
    <Suspense fallback={<HomePageSkeleton />}>
      <Services data={data['service_page']} params={params} />
    </Suspense>

  )
}
export default Page
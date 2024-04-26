import React, { Suspense } from 'react'
import Services from '@/components/shared-components/services/Services'
import { API_BASE_URL, API_ENDPOINTS } from '@/api/apiConfig';
import { getData } from '@/utils/serverActions';
import AboutPageSkeleton from '@/components/skeleton/AboutPageSkeleton';

export const dynamic = 'force-static'


const Page = async ({ params }) => {
  const res = await fetch(`https://franklin.tatadev.pro/api/v1/pages/`,{
    cache: 'no-cache'
  })
  const data = await res.json()

  return (
    <Suspense fallback={<AboutPageSkeleton />}>
      <Services data={data['service_page']} params={params} />
    </Suspense>

  )
}
export default Page
import AboutPage from '@/components/server/aboutPage'
import { Suspense } from 'react'
import Loading from './loading';
import { Box, Container, Flex, Skeleton, SkeletonText } from '@chakra-ui/react';

export const dynamic = 'force-static'



export default async function Page({ params }) {

  const res = await fetch(`https://franklin.tatadev.pro/api/v1/pages/`,{
    cache: "no-cache"
  })
  const data = await res.json()

  return (
    <>
      <Suspense fallback={<Loading />}>
        <AboutPage data={data['about_page']} params={params}/> 
      </Suspense>
  
    </>
  )
}
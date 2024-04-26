import AboutUsCover from '@/components/shared-components/aboutPage/AboutUsCover'
import { API_BASE_URL, API_ENDPOINTS } from '@/api/apiConfig'
import { getData } from '@/utils/serverActions'
import AboutPage from '@/components/server/aboutPage'
import { Suspense } from 'react'
import Loading from './loading';
// export async function generateMetadata({ params, searchParams }, parent) {
//   // read route params
//   const id = params.id

//   // fetch data
//   const product = await getData(API_BASE_URL, API_ENDPOINTS.ABOUT)

//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []

//   return {
//     title: product[0].meta_title,
//     description: product[0].meta_description,
//     icons: {
//       icon: [
//         {
//           url: product[0].meta_image,
//         },
//       ],
//     },
//     openGraph: {
//       description: product[0].meta_description,
//       title: product[0].meta_title,
//       images: [{ url: product[0].meta_image }, ...previousImages],
//     },
//   }
// }

export const dynamic = 'force-static'



export default async function Page({ params }) {

  const res = await fetch(`https://franklin.tatadev.pro/api/v1/pages/`,{
    cache: 'force-cache'
  })
  const data = await res.json()



  return (
    <>

      <Suspense fallback={<Loading />}>
        <AboutPage data={data['about_page']} params={params} />
      </Suspense>
    </>
  )
}
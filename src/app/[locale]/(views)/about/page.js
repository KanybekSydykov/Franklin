import AboutUsCover from './AboutUsCover'
import {API_BASE_URL, API_ENDPOINTS} from '@/api/apiConfig'
import {getData} from '@/utils/serverActions'

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const id = params.id
  
    // fetch data
    const product = await getData(API_BASE_URL, `${API_ENDPOINTS.ABOUT}`)
  
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
  


export default async function page({params}) {
    'use server'
    const data = await getData(API_BASE_URL,API_ENDPOINTS.ABOUT)

    return (
        <>
        <AboutUsCover data={data} params={params} />
        </>
    )
}
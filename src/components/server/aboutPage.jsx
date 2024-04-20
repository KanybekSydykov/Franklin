import AboutUsCover from '@/components/shared-components/aboutPage/AboutUsCover'
import {API_BASE_URL, API_ENDPOINTS} from '@/api/apiConfig'
import {getData} from '@/utils/serverActions'
  


export default async function AboutPage({params}) {
    const data = await getData(API_BASE_URL,API_ENDPOINTS.ABOUT)

    return (
        <>
        <AboutUsCover data={data} params={params} />
        </>
    )
}
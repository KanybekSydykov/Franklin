'use client'
import AboutUsCover from '@/components/shared-components/aboutPage/AboutUsCover'
import {API_BASE_URL, API_ENDPOINTS} from '@/api/apiConfig'
import {getData} from '@/utils/serverActions'
  


export default function AboutPage({params,data}) {

    return (
        <>
        <AboutUsCover data={data['about_page']} params={params} />

        {/* <h1>hello mf</h1> */}


        </>
    )
}
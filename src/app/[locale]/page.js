import { getData } from '@/utils/serverActions'
import { API_BASE_URL, API_ENDPOINTS } from '@/api/apiConfig'
import MainCover from '../MainCover'
import Errors from '@/components/shared-components/Errors'




export default async function Home({ params }) {

  'use server'
  const pages = await getData(API_BASE_URL, API_ENDPOINTS.PAGES)

  const videoHomePage = await getData(API_BASE_URL, API_ENDPOINTS.VIDEO)
  const videoPreloader = await getData(API_BASE_URL, API_ENDPOINTS.VIDEO_PRELOADER)

  const componentPreload = await getData(API_BASE_URL, API_ENDPOINTS.PRELOAD)


  const data = {
    pages,
    videoHomePage,
    videoPreloader,
    componentPreload,
    params
  }


  return (
    <>
      <MainCover {...data} />

    </>
  );
}









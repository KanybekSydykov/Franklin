// import { API_BASE_URL, API_ENDPOINTS } from '@/api/apiConfig'
// import MainCover from '@/components/index/MainCover'
// import Errors from '@/components/maintance/Errors'
// import { getData } from '@/utils/serverActions'

// export async function generateMetadata({ params, searchParams }, parent) {
//   // read route params
//   const id = params.id

//   // fetch data
//   const meta = await getData(API_BASE_URL, API_ENDPOINTS.SITE_INFO)

//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []

//   return {
//     title: meta.meta_title,
//     description: meta.meta_description,
//     openGraph: {
//       description: meta.meta_description,
//       title: meta.meta_title,
//       images: [{url:meta.meta_image}] ,
//     },
//   }
// }

// async function getAllData() {
//   const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.PAGES}`)
//   const pages = await res.json()

//   const res2 = await fetch(`${API_BASE_URL}${API_ENDPOINTS.VIDEO}`)
//   const videoHomePage = await res2.json()
//   const res3 = await fetch(`${API_BASE_URL}${API_ENDPOINTS.VIDEO_PRELOADER}`)
//   const videoPreloader = await res3.json()
//   const res4 = await fetch(`${API_BASE_URL}${API_ENDPOINTS.PRELOAD}`)
//   const componentPreload = await res4.json()
//   const res5 = await fetch(`${API_BASE_URL}${API_ENDPOINTS.ABOUT}`)
//   const about = await res5.json()


//   const data = {
//     pages,
//     videoHomePage,
//     videoPreloader,
//     componentPreload,
//     about
//   }

//   return data
// }


// export default async function Page({ params }) {
  
//   const data = await getAllData()
//   data.params = params

//   return (
//     <>

//     </>
//   );
// }









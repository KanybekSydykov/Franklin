import Errors from '@/components/maintance/Errors'
import { API_BASE_URL, API_ENDPOINTS } from '@/api/apiConfig';
import { getData } from '@/utils/serverActions';
import { Suspense } from 'react';
import AboutPageSkeleton from '@/components/skeleton/AboutPageSkeleton';


export default async function NotFound({}) {
  const pages = await getData(API_BASE_URL, API_ENDPOINTS.PAGES)


  return (
    <div>
      <Suspense fallback={<AboutPageSkeleton />}>
      <Errors data={pages}/>
      </Suspense>
     
    </div>
  );
}

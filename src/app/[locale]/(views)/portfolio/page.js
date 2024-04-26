import React, { Suspense } from 'react';
import Portfolio from '@/components/shared-components/portfolio/Portfolio';
import { API_BASE_URL, API_ENDPOINTS } from '@/api/apiConfig';
import { getData } from '@/utils/serverActions';
import Loading from './loading';

export const dynamic = 'force-static'

const Page = async ({ params }) => {
  
  // Call getPageData to fetch data
  'use server'
  const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.PAGES}`,{
    cache: 'force-cache'
  })
  const data = await res.json()

  // Render Portfolio component with data
  return (
    <>
     <Suspense fallback={<Loading />}>
     <Portfolio data={data['portfolio_page']} params={params} />
    </Suspense>
       
    </>
  );
};

export default Page;

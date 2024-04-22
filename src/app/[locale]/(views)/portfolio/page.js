import React, { Suspense } from 'react';
import Portfolio from '@/components/shared-components/portfolio/Portfolio';
import { API_BASE_URL, API_ENDPOINTS } from '@/api/apiConfig';
import { getData } from '@/utils/serverActions';
import HomePageSkeleton from '@/components/skeleton/HomePageSkeleton';


const Page = async ({ params }) => {
  // Ensure server-side rendering
  'use server';
  
  // Call getPageData to fetch data
  'use server'
  const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.PAGES}`)
  const data = await res.json()

  // Render Portfolio component with data
  return (
    <>
     <Suspense fallback={<HomePageSkeleton />}>
     <Portfolio data={data['portfolio_page']} params={params} />
    </Suspense>
       
    </>
  );
};

export default Page;

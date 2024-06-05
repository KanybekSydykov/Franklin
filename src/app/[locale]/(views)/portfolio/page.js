import React, { Suspense } from 'react';
import Portfolio from '@/components/shared-components/portfolio/Portfolio';
import { API_BASE_URL, API_ENDPOINTS } from '@/api/apiConfig';
import { getData } from '@/utils/serverActions';
import Loading from './loading';

export const dynamic = 'force-static'

const Page = async ({ params }) => {
  
  // Call getPageData to fetch data
  'use server'
  const res = await fetch(`https://franklin.tatadev.pro/api/v1/pages/`,{
    cache: 'no-cache'
  })
  const data = await res.json()

  // Render Portfolio component with data
  return (
    <>

     <Portfolio data={data['portfolio_page']} params={params} />

       
    </>
  );
};

export default Page;

import React from 'react';
import Portfolio from '@/components/shared-components/portfolio/Portfolio';
import { API_BASE_URL, API_ENDPOINTS } from '@/api/apiConfig';
import { getData } from '@/utils/serverActions';


const Page = async ({ params }) => {
  // Ensure server-side rendering
  'use server';
  
  // Call getPageData to fetch data
  const data = await getData(API_BASE_URL, API_ENDPOINTS.PORTFOLIO_DURATION);

  // Render Portfolio component with data
  return (
    <>
        <Portfolio data={data} params={params} />
    </>
  );
};

export default Page;

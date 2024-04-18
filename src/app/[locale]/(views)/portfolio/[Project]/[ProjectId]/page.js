import React from 'react'
import ProjectId from './ProjectId'
import { API_BASE_URL, API_ENDPOINTS } from '@/api/apiConfig';
import { getData } from '@/utils/serverActions';

const page = async({ params }) => {
  'use server'
  
  const data = await getData(API_BASE_URL,`${API_ENDPOINTS.PORTFOLIO_PROJECTS}${params.ProjectId}/`)



  return (
    <>
      <ProjectId params={params} data = {data} />
    </>

  )
}

export default page
import React from 'react'
import ProjectId from '@/components/shared-components/portfolio/ProjectId'
import { API_BASE_URL, API_ENDPOINTS } from '@/api/apiConfig';
import { getData } from '@/utils/serverActions';

const page = async({ params }) => {
  const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.PORTFOLIO_PROJECTS}${params.ProjectId}/`,{
    cache: 'no-cache'
  })
  const data = await res.json()


  return (
    <>
      <ProjectId params={params} data = {data} />
    </>

  )
}

export default page
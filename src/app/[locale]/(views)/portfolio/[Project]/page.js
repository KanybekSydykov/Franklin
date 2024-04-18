import Project from './Project'
import { API_BASE_URL, API_ENDPOINTS } from '@/api/apiConfig';
import { getData } from '@/utils/serverActions';

// import dynamic  from 'next/dynamic'

// const Project = dynamic(() => import('./Project'))

const page = async ({ params }) => {
  'use server'
  const data = await getData(API_BASE_URL, `${API_ENDPOINTS.PORTFOLIO_DURATION}${params.Project}/`)


  return (
    <div>
      <Project data={data} params={params} />
    </div>
  )
}

export default page
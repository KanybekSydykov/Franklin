import Project from '@/components/shared-components/portfolio/Project'
import { API_BASE_URL, API_ENDPOINTS } from '@/api/apiConfig';
import { getData } from '@/utils/serverActions';

// import dynamic  from 'next/dynamic'

// const Project = dynamic(() => import('./Project'))

export const dynamic = 'force-static'

const page = async ({ params }) => {
  const data = await getData(API_BASE_URL, `${API_ENDPOINTS.PORTFOLIO_DURATION}${params.Project}/`)

console.log(data);
  return (
    <div>
      <Project data={data} params={params} />
    </div>
  )
}

export default page
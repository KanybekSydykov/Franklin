import ServicePage from './ServicePage'
import { API_BASE_URL, API_ENDPOINTS } from '@/api/apiConfig';
import { getData } from '@/utils/serverActions';

const page = async ({ params }) => {
    'use server'
    const data = await getData(API_BASE_URL, `${API_ENDPOINTS.SERVICES}${params.ServicePage}/`)

    return (
        <>
            <ServicePage data={data} params={params} />
        </>
    )
}

export default page


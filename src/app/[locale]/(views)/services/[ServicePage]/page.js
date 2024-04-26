import ServicePage from '@/components/shared-components/services/ServicePage'
import { API_BASE_URL, API_ENDPOINTS } from '@/api/apiConfig';
import { getData } from '@/utils/serverActions';

const page = async ({ params }) => {
    'use server'
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.SERVICES}${params.ServicePage}/`,{
        cache: 'no-cache'
    })
    const data = await res.json()

    return (
        <>
            <ServicePage data={data} params={params} />
        </>
    )
}

export default page


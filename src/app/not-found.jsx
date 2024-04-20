import Errors from '@/components/maintance/Errors'
import { API_BASE_URL, API_ENDPOINTS } from '@/api/apiConfig';
import { getData } from '@/utils/serverActions';


export default async function NotFound({}) {
  const pages = await getData(API_BASE_URL, API_ENDPOINTS.PAGES)


  return (
    <div>
      <Errors data={pages}/>
    </div>
  );
}

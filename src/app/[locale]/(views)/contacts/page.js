import React, { Suspense } from 'react';
import Contacts from '@/components/shared-components/contacts/Contacts';
import {API_BASE_URL, API_ENDPOINTS} from '@/api/apiConfig'
import HomePageSkeleton from '@/components/skeleton/HomePageSkeleton';

const page = async({params}) => {
  
  'use server'
  const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.PAGES}`)
  const data = await res.json()
  
  return (

         <Suspense fallback={<HomePageSkeleton />}>
       <Contacts  data={data['contact_page']} params={params}/>
      </Suspense>
     

  )
}

export default page
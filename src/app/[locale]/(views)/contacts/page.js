import React, { Suspense } from 'react';
import Contacts from '@/components/shared-components/contacts/Contacts';
import {API_BASE_URL, API_ENDPOINTS} from '@/api/apiConfig'
import Loading from './loading'


export const dynamic = 'force-static'

const page = async({params}) => {
  
  'use server'
  const res = await fetch(`https://franklin.tatadev.pro/api/v1/pages/`,{
    cache: 'no-cache'
  })
  const data = await res.json()
  
  return (

         <Suspense fallback={<Loading />}>
       <Contacts  data={data['contact_page']} params={params}/>
      </Suspense>
     

  )
}

export default page
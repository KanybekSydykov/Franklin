import React from 'react';
import Contacts from '@/components/shared-components/contacts/Contacts';
import {API_BASE_URL, API_ENDPOINTS} from '@/api/apiConfig'
import {getData} from '@/utils/serverActions'

const page = async({params}) => {
  
  'use server'
  const data = await getData(API_BASE_URL,API_ENDPOINTS.CONTACTS)
  
  return (
    <div>
      <Contacts  data={data} params={params}/>
    </div>
  )
}

export default page
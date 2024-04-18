import React from 'react'
import Services from './Services'
import { API_BASE_URL, API_ENDPOINTS } from '@/api/apiConfig';
import { getData } from '@/utils/serverActions';

const page = async({params}) => {

  'use server'
  const data = await getData(API_BASE_URL,`${API_ENDPOINTS.SERVICE_PAGE}`)


  return (
    <Services data={data[0]} params={params} />
  )
}

export default page
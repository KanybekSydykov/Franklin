import React from 'react'
import ProjectId from './ProjectId'

const page = ({ params }) => {
  return (
    <div>
        <ProjectId link = {params.Project} />
    </div>
  )
}

export default page
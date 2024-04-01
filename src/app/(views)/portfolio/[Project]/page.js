import Project from './Project'


// import dynamic  from 'next/dynamic'

// const Project = dynamic(() => import('./Project'))

const page = ({ params }) => {
  return (
  <div>
    <Project link = {params.Project} />
    </div>
  )
}

export default page
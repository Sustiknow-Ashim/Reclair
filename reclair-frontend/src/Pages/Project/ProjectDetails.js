import { useQuery } from '@tanstack/react-query';
import Project from './Project';
// import React, { useEffect, useState } from 'react';

const ProjectDetails = () => {

  const { data: project = [] } = useQuery({
    queryKey: ['project'],
    queryFn: () => fetch('http://localhost:5000/api/project')
      .then(res => res.json())
  })

  return (
    <div className=''>
      <div className='grid grid-cols-1 grid-flow-rows gap-4'>
        {
          project.map(project => <Project
            key={project._id}
            project={project}
          ></Project>)
        }
      </div>
    </div>
  );
};

export default ProjectDetails;
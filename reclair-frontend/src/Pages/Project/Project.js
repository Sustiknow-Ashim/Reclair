import { Link } from 'react-router-dom';
import adamas from '../../images/about/adamas computer.jpg';
import icei from '../../images/about/solar village 2.jpg';
import pro from '../../images/about/pro3.jpeg';
import axios from 'axios';
import { useEffect, useState } from 'react';


function Project() {

  const [projects,setProjects]=useState([]);

  async function getProject() {
    try {
      const response = await axios.get('http://localhost:5000/api/project');
     setProjects(response.data)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>{

  getProject() ;},[])

  console.log (projects)

  return (
    <div >
      <div className="container font-bold py-2 my-12 px-4 rounded">
      { projects.map((project,key)=>{
        return(
        <div key={key} className="card lg:card-side bg-base-100 shadow-xl px-3 py-5">
        <figure><img className='w-80' src={adamas} alt="Album" /></figure>
        <div className="card-body">
          <h2 className="card-title">{project.organization}</h2>
          <p>{project.ppa_details}</p>
          <p>{project.seller_address}</p>
          <p>{project.seller_website}</p>
    

          <div className="card-actions justify-end">
            <div class="w-full md:w-1/3 px-2">
              <div class="rounded-lg shadow-sm mb-4">
                <div class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                  <div class="px-3 pt-8 pb-10 text-center relative z-10">
                    <h4 class="text-sm uppercase text-gray-500 leading-tight">Comments</h4>
                    <h3 class="text-3xl text-gray-700 font-semibold leading-tight my-3">8,028</h3>
                    <p class="text-xs text-green-500 leading-tight">▲ 8.2%</p>
                  </div>
                  <div class="absolute bottom-0 inset-x-0">
                    <canvas id="chart3" height="70"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>)
      }) }
    




        <div className="hero  min-h-12 bg-base-200  m-5">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={icei} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>

      </div>

    </div>

  )
}

export default Project;
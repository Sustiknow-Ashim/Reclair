import { Link } from 'react-router-dom';
import adamas from '../../images/about/adamas computer.jpg';
import icei from '../../images/about/solar village 2.jpg';
import pro from '../../images/about/pro3.jpeg';

function Project() {

  

  return (
    <div >
      <div className="container font-bold py-2 my-12 px-4 rounded">
        <div className="card lg:card-side bg-base-100 shadow-xl px-5 py-5">
          <figure><img className='w-80' src={adamas} alt="Album" /></figure>
          <div className="card-body">
            <h2 className="card-title">ADAMAS UNIVERSITY!</h2>
            <p>School of Management & Computer Science</p>
            <p>KWP:78.840</p>

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
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl px-5 py-5">
          <figure><img className='w-80' src={icei} alt="Album" /></figure>
          <div className="card-body">
            <h2 className="card-title">The Institute of Computer Engineers (India)/ICEI</h2>
            <p>Techno International</p>
            <p>KWP:50.160</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Know More</button>
            </div>
          </div>
        </div>


        <div className="card lg:card-side bg-base-100 shadow-xl px-5 py-5">
          <figure><img className='w-80' src={pro} alt="Album" /></figure>
          <div className="card-body">
            <h2 className="card-title">Ramakrishna Mission Boys' Home High School (H.S), Rahara</h2>
            <p>Central Office,Central Kitchen,School Hostel</p>
            <p>KWP:30.030,30.030,40.260</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Know More</button>
            </div>
          </div>
        </div>


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
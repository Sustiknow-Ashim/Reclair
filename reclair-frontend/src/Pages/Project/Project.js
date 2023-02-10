import { Link } from 'react-router-dom';
import adamas from '../../images/about/adamas computer.jpg';
import icei from '../../images/about/solar village 2.jpg';
import pro from '../../images/about/pro3.jpeg';

function Project() {
  return (
    <div >
      <Link to="/" className=" font-bold py-2 px-4 rounded">
      <div className="card lg:card-side bg-base-100 shadow-xl px-5 py-5">
  <figure><img className='w-80' src={adamas} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">ADAMAS UNIVERSITY!</h2>
    <p>School of Management & Computer Science</p>
    <p>KWP:78.840</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Know More</button>
    </div>
  </div>
</div>
<div className="card lg:card-side bg-base-100 shadow-xl px-5 py-5">
  <figure><img className='w-80' src={icei} alt="Album"/></figure>
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
  <figure><img className='w-80' src={pro} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Ramakrishna Mission Boys' Home High School (H.S), Rahara</h2>
    <p>Central Office,Central Kitchen,School Hostel</p>
    <p>KWP:30.030,30.030,40.260</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Know More</button>
    </div>
  </div>
</div>

      </Link>
      
    </div>
    
  )
}

export default Project;
import React from "react";
import useTitle from "../../Hooks/useTitle";
const Project = ({ project }) => {
  useTitle('Projects')
  const {
    name,
    organization,
    image,
    seller_address,
    seller_website,
    total_project_cost,
    percent_of_investment_done,
    ppa_rate,
  } = project;

  return (
    <div className="container mx-auto mt-6 mb-6 ">
      <div className=" shadow-xl rounded-b-box py-5 mx-10 justify-center bg-base-100">
        <div className="md:flex">
          <div className="w-full ml-5 md:w-96  ">
            <figure>
              <img src={image} className="w-96 rounded-2xl justify-center" alt="Shoes" />
            </figure>
          </div>

          <div className="capitalize w-full md:w-96 mx-3 md:my-4 sm:my-8">
            <h2 className="font-semibold ml-4">
              Name:<span className="text-lg text-primary"> {name}</span>
            </h2>
            <p className="font-medium ml-4">
              Organization:{" "}
              <span className="text-lg text-primary">{organization}</span>
            </p>
            <p className="font-medium ml-4">
              Seller Address:{" "}
              <span className="text-lg text-primary">{seller_address}</span>
            </p>
            <p className="font-medium ml-4">
              Seller Website:{" "}
              <span className="text-lg text-primary">{seller_website}</span>
            </p>
            <p className="font-medium ml-4">
              Total Project:{" "}
              <span className="text-lg text-primary">
                {total_project_cost}
              </span>
            </p>
            <p className="font-medium ml-4 text-red-600">
              Investment Done: {percent_of_investment_done}
            </p>
            <p className="font-medium ml-4 ">
              PPA Rate:{" "}
              <span className="text-normal text-primary">{ppa_rate}</span>{" "}
            </p>
          </div>
          <div className="stats shadow w-96 mx-3">
            {/* graph */}
            <div className="stat bg-slate-100 ">
              <div className="stat-title">Total Reviews</div>
              <div className="stat-value">89,400</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

          </div>
          {/* <span className="badge badge-lg ">NEW</span> */}
          <div className="badge badge-error gap-2 p-2 rounded">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg> */}
            On Sale
          </div>
          <div className="card-actions items-end ml-3 mt-3 content-center p-2">
            <button className="btn btn-primary  ">Read More</button>
            {/* <button type="button" class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              <span>Know more</span>
              <span class="sr-only">Notifications</span>
              <div class="absolute inline-flex items-center justify-center w-14 h-14 text-s font-bold text-white bg-red-500 border-2 border-white rounded-full -top-6 -right-2 dark:border-gray-900">On Sale</div>
            </button> */}
          </div>
        </div>


      </div>
    </div>
  );
};

export default Project;

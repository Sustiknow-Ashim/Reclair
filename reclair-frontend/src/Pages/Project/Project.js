import React from "react";
const Project = ({ project }) => {
  const {
    name,
    organization,
    picture,
    seller_address,
    seller_website,
    total_project_cost,
    percent_of_investment_done,
    ppa_rate,
  } = project;

  return (
    <div className="container mx-auto mt-6 mb-6">
      <div className=" shadow-xl pt-5 pb-5 pr-5">
        <div className="md:flex">
          <div className="w-full ml-5 md:w-96 justify-center">
            <figure>
              <img src={picture} className="w-96 rounded-2xl justify-center" alt="Shoes" />
            </figure>
          </div>

          <div className="capitalize w-full md:w-96 ">
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
            <div className="stats shadow w-96">
  
  <div className="stat bg-gray-800">
    <div className="stat-title">Total Reviews</div>
    <div className="stat-value">89,400</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
</div>
          <div className="card-actions items-end ml-3 mt-3 content-center">
              <button className="btn btn-primary  ">Read More..</button>
            </div>
        </div>
        {/* graph */}
       

      </div>
    </div>
  );
};

export default Project;

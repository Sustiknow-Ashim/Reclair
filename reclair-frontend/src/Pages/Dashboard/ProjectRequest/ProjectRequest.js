import React from "react";
import { toast } from "react-hot-toast";

const ProjectRequest = () => {
  const handleAddToProjects = (event) => {

    event.preventDefault();

    const form = event.target;
    const org_name = form.org_name.value;
    const project_capacity = form.project_capacity.value;
    const project_type = form.project_type.value;
    const seller_address = form.seller_address.value; 
    const average_consume = form.average_consume.value; 
    const project_approx_area = form.project_approx_area.value; 
    const number_of_floor = form.number_of_floor.value; 
    const seller_website = form.seller_website.value; 
    const last_electric_bill = form.last_electric_bill.value; 
    const approx_project_cost = form.approx_project_cost.value; 


    const projects = {
      org_name,
      project_capacity,
      project_type,
      project_approx_area,
      number_of_floor,
      seller_address,
      seller_website,
      average_consume,
      last_electric_bill,
      approx_project_cost,
    }
    fetch('http://localhost:5000/api/project/requestProject', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(projects)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          toast.success('Projects Add confirm')
          form.reset()
        }
        else {
          toast.error(data.message)
        }

      })

  };
  return (
    <div>
      <h2 className="text-4xl text-center mx-6 my-6">
        Please Fill up your Requierment{" "}
      </h2>

      <div className="w-100 bg-gray-800 mb-5 rounded-md p-7">
        <form onSubmit={handleAddToProjects} className="w-full max-w-lg">

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full  px-3 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name">
                Organization Name
              </label>
              <input
                type="text"
                name="org_name"
                placeholder="Organization Name"
                className="input input-md input-bordered w-full"
                required
              />
            </div>
          </div>


          <div className="flex flex-wrap -mx-3">
            <div className="w-full  px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name">
                Project Capacity in kWp you want to install
              </label>
              <input
                type="text"
                name="project_capacity"
                placeholder="Project Capacity in kWp"
                className="input mb-6 input-md input-bordered w-full"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-2/4 px-3 mb-2 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city">
                Project Type
              </label>
              <input
                type="text"
                name="project_type"
                placeholder="project Type"
                className="input mb-6 input-md input-bordered w-full"
                required
              />
            </div>
          </div>


          <div className="flex flex-wrap -mx-3">
            <div className="w-full  px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name">
                Project Approx Area
              </label>
              <input
                type="text"
                name="project_approx_area"
                placeholder="Area in sq ft"
                className="input mb-6 input-md input-bordered w-full"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full  px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name">
                Nmber of floor
              </label>
              <input
                type="text"
                name="number_of_floor"
                placeholder="Nmber of floor"
                className="input mb-6 input-md input-bordered w-full"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name">
                Installation Address
              </label>
              <input
                type="text"
                name="seller_address"
                placeholder="Installation Address"
                className="input mb-6 input-md input-bordered w-full"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full  px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name">
                Organization website link
              </label>
              <input
                type="text"
                name="seller_website"
                placeholder="Organization website link"
                className="input mb-6 input-md input-bordered w-full"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full  px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name">
                Approx Project Cost
              </label>
              <input
                type="text"
                name="approx_project_cost"
                placeholder="Approx Project Cost"
                className="input mb-6 input-md input-bordered w-full"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full  px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name">
                Average Electric Consume
              </label>
              <input
                type="text"
                name="average_consume"
                placeholder="Average Electric Consume"
                className="input mb-6 input-md input-bordered w-full"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full  px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name">
                Last Electricity bill ammount
              </label>
              <input
                type="text"
                name="last_electric_bill"
                placeholder="Last Electricity bill ammount"
                className="input mb-6 input-md input-bordered w-full"
                required
              />
            </div>
          </div>

                   
          

          <input
            type="submit"
            className="w-full btn bg-green-600"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default ProjectRequest;

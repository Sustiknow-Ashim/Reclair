
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';


const AddProjects = () => {
    const [projectStatus, setProjectStatus] = useState('');

    const handleAddToProjects = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const organization = form.organization.value;
        const project_type = form.project_type.value;
        const seller_address = form.seller_address.value;
        const total_project_cost = form.total_project_cost.value;
        const percent_of_investment_done = form.percent_of_investment_done.value;
        const ppa_rate = form.ppa_rate.value;
        const ppa_details = form.ppa_details.value;
        const project_approx_area = form.project_approx_area.value;
        const number_of_floor = form.number_of_floor.value;
        const seller_website = form.seller_website.value;
        const min_investment = form.min_investment.value;
        const ppa_duration = form.ppa_duration.value;



        const projects = {
            name,
            image,
            organization,
            project_type,
            ppa_details,
            project_approx_area,
            number_of_floor,
            seller_address,
            seller_website,
            total_project_cost,
            percent_of_investment_done,
            ppa_rate,
            min_investment,
            ppa_duration,
        }


        fetch('http://localhost:5000/api/project', {
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


    }

    return (
        <div>
            <div>
                <h2 className='text-4xl text-center text-orange-500 font-bold my-4'>Add Projects</h2>
                <div className='flex justify-center items-center'>
                    <div className='w-100 bg-gray-800 rounded-md p-7'>

                        <form onSubmit={handleAddToProjects} className="w-full max-w-lg">

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full  px-3 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        Photo Url
                                    </label>
                                    <input type="text" name='image' placeholder="Photo Url" className="input input-md input-bordered w-full" required />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full  px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                        Project Code
                                    </label>
                                    <input type="text" name='name' placeholder="Project Code" className="input input-md input-bordered w-full" required />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full  px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                        Project Capacity in kWp
                                    </label>
                                    <input type="text" name='organization' placeholder="Project Capacity in kWp" className="input mb-6 input-md input-bordered w-full" required />
                                </div>
                            </div>



                            <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                        Project Status
                                    </label>
                                    <input type="text" name='project_type' placeholder="project Status" className="input mb-6 input-md input-bordered w-full" required />
                                </div>

                                <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                                        PPA status
                                    </label>
                                    <input type="text" name='ppa_details' placeholder="PPA Status" className="input mb-6 input-md input-bordered w-full" required />
                                </div>
                            </div>


                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full  px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                        Project Approx Area
                                    </label>
                                    <input type="text" name='project_approx_area' placeholder="Area in sq ft" className="input mb-6 input-md input-bordered w-full" required />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full  px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                        Nmber of floor
                                    </label>
                                    <input type="text" name='number_of_floor' placeholder="4 floor" className="input mb-6 input-md input-bordered w-full" required />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full  px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                        Seller Address
                                    </label>
                                    <input type="text" name='seller_address' placeholder="Seller Address" className="input mb-6 input-md input-bordered w-full" required />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full  px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                        Seller website link
                                    </label>
                                    <input type="text" name='seller_website' placeholder="http://www.seller1.com" className="input mb-6 input-md input-bordered w-full" required />
                                </div>
                            </div>

                            <div className="flex flex-wrap mx-2 m-3">
                                <select onChange={(e)=>{console.log(e.target.value)}} className="w-80  px-3 select select-bordered">
                                    <option disabled selected>Project Selling status</option>
                                    <option value='on sale'>On Sale</option>
                                    <option value={'sold'}>Sold</option>
                                </select>
                            </div>

                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full  px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                        Total Project Cost
                                    </label>
                                    <input type="text" name='total_project_cost' placeholder="Project Cost" className="input mb-6 input-md input-bordered w-full" required />
                                </div>
                            </div>


                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full  px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                        Percent of investment done
                                    </label>
                                    <input type="text" name='percent_of_investment_done' placeholder="investment done" className="input mb-6 input-md input-bordered w-full" />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full  px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                        PPA Rate
                                    </label>
                                    <input type="text" name='ppa_rate' placeholder="PPA Rate" className="input mb-6 input-md input-bordered w-full" required />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full  px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                        Minimum Investment Possible
                                    </label>
                                    <input type="text" name='min_investment' placeholder="Min Investment" className="input mb-6 input-md input-bordered w-full" />
                                </div>
                            </div>


                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full  px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                        PPA duration
                                    </label>
                                    <input type="text" name='ppa_duration' placeholder="PPA Duration" className="input mb-6 input-md input-bordered w-full" />
                                </div>
                            </div>

                            <input type="submit" className='w-full btn bg-green-600' value="Submit" />
                        </form>










                        {/* <form onSubmit={handleAddToProjects}>
                            <input type="text" name='image' placeholder="Photo Url" className="input mb-6 input-md input-bordered w-full max-w-xs" required />
                            <input type="text" name='name' placeholder="Name" className="input mb-6 input-md input-bordered w-full max-w-xs" required />
                            <input type="text" name='organization' placeholder="Organization" className="input mb-6 input-md input-bordered w-full max-w-xs" required />
                            <input type="text" name='seller_address' placeholder="Seller Address" className="input mb-6 input-md input-bordered w-full max-w-xs" required />
                            <input type="text" name='total_project_cost' placeholder="Total Project Cost" className="input mb-6 input-md input-bordered w-full max-w-xs" required />
                            <input type="text" name='percent_of_investment_done' placeholder="Investment Done" className="input mb-6 input-md input-bordered w-full max-w-xs" required />
                            <input type="text" name='ppa_rate' placeholder="PPA Rate" className="input mb-6 input-md input-bordered w-full max-w-xs" required />
                            <input type="submit" className='w-full btn bg-gray-600' value="Submit" />
                        </form> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProjects;
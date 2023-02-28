
import React from 'react';
import { toast } from 'react-hot-toast';
const AddProjects = () => {

      const handleAddToProjects =(event) =>{



        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.picture.value;
        const organization = form.organization.value;
        const seller_address = form.seller_address.value;
        const total_project_cost = form.total_project_cost.value;
        const percent_of_investment_done = form.percent_of_investment_done.value;
        const ppa_rate = form.ppa_rate.value;
        
        
        const projects = {
            name,
            image,
            organization,
            seller_address,
            total_project_cost,
            percent_of_investment_done,
            ppa_rate
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
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Projects Add confirm')
                    form.reset();
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
                    <div className='w-96 bg-gray-800 rounded-md p-7'>
                        <form onSubmit={handleAddToProjects}>
                        <input  type="text" name='image' placeholder="Photo Url" className="input mb-6 input-md input-bordered w-full max-w-xs" required />
                            <input type="text" name='name' placeholder="Name" className="input mb-6 input-md input-bordered w-full max-w-xs" required />
                            <input type="text" name='organization' placeholder="Organization" className="input mb-6 input-md input-bordered w-full max-w-xs"required  />
                            <input type="text" name='seller_address' placeholder="Seller Address" className="input mb-6 input-md input-bordered w-full max-w-xs"required  />
                            <input type="text" name='total_project_cost' placeholder="Total Project Cost" className="input mb-6 input-md input-bordered w-full max-w-xs" required />
                            <input type="text" name='percent_of_investment_done' placeholder="Investment Done" className="input mb-6 input-md input-bordered w-full max-w-xs" required />
                            <input type="text" name='ppa_rate' placeholder="PPA Rate" className="input mb-6 input-md input-bordered w-full max-w-xs" required />
                           <input type="submit" className='w-full btn bg-gray-600' value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProjects;
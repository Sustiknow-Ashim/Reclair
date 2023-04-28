import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AllProjectRequest = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get('http://localhost:5000/api/project/getRequestedProject')
            setProjects([...data])
            console.log('projects', projects)
        }

        getData();
    }, [])

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>last electricity bill</th>
                            <th>No of Floor</th>
                            <th>Project type</th>
                            <th>Address</th>
                            <th>website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projects.map((project, i) => {
                                return (
                                    <tr key={i}>
                                        <th>{i+1}</th>
                                        <td>{project.org_name}</td>
                                        <td>{project.last_electric_bill}</td>
                                        <td>{project.number_of_floor}</td>
                                        <td>{project.project_type}</td>
                                        <td>{project.seller_address}</td>
                                        <td>{project.seller_website}</td>
                                    </tr>
                                )
                            })
                        }



                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllProjectRequest

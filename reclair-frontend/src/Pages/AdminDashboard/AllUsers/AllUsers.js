import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from 'react-hot-toast';

const AllUsers = () => {

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("http://localhost:5000/api/user").then((res) => res.json()),
  });


  const makeAdmin = id => {
    fetch(`http://localhost:5000/api/user/makeAdmin/${id}`, {
      method: 'PUT',
    })
      .then(res => res.json())
      .then(data => {
        if(data._id){
          toast.success('Admin Created Successfully')
          refetch()
        }
      })
  }
  

  const deleteUser = id =>{
    fetch(`http://localhost:5000/api/user/${id}`,{
      method:'DELETE',
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount > 0){
        toast.success('User Deleted Successfully')
        refetch()
      }
    })
  }


  return (
    <div className="container mx-auto">
      <h2 className="text-3xl">All Users</h2>

      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Make Admin</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user?.role !== 'Admin' && <button onClick={() => makeAdmin(user._id)} className="btn btn-xs btn-primary">Admin</button>}
                  </td>
                  <td>
                    <button onClick={() => deleteUser(user._id)} className="btn btn-xs btn-primary">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;

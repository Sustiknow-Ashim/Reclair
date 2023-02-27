import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Navbar from "../Navbar/Navbar";
import useAdmin from "./AdminHooks/AdminHooks";

const AdminDashboard = () => {
  const{user} = useContext(AuthContext)
  const [isAdmin]=useAdmin(user?.email)
  return (
    <div>
      <Navbar></Navbar>

      <div className="drawer drawer-mobile container mx-auto">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
           {
            isAdmin === 'Admin' && <>
             <li> <Link to={'/dashboard/allusers'}>All Users</Link> </li>
             <li>
              <Link to={'/dashboard/addprojects'}>Add Projects</Link>
            </li>
            </>
           }

            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
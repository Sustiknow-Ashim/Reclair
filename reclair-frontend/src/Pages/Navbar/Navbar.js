import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import logo from "../../images/about/logo.png";
import { BsPersonCircle } from "react-icons/bs";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((err) => console.log(err));
    navigate("/login");
  };

  // Implementing: show dashboard after login 29/03
  const [isLoggedin, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLogin') ? true : false;
    setIsLoggedIn(loginStatus);
  }, [handleLogOut])

  return (
    <div className="navbar bg-base-100 shadow-md ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/project" className="justify-between">
                {" "}
                Projects{" "}
              </Link>
            </li>
            <li>
              <Link to="contact">Contact Us</Link>
            </li>
            {/* Install solar option/link */}
            <li>
              <Link to="contact">Install a Solar at your place &gt;</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost">
          <img
            src={logo}
            className="h-6 w-100 mr-3 sm:h-9 rounded hover:rounded-lg"
            alt="Reclair Logo"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          {!user?.displayName && <li tabIndex={0}>
            <Link to="/project">Project</Link>
          </li>}
          {user?.uid && <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>}

          {/* Install solar option/link */}
          <li>
            <Link to="/solarEnquery" className="text-xl  mx-4 underline underline-offset-2 p-2 rounded">Install Solar at your place &gt;</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          {/* Install solar option/link */}
          {/* <li>
            <Link to="/solarEnquery" className="text-xl bg-gray-100 text-blue-800 ml-10 p-2 rounded">Install Solar at your place &gt;</Link>
          </li> */}
        </ul>
      </div>

      <div className="navbar-end">
        {user?.uid ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className=" cursor-pointer font-bold m-1">
              {user?.photoURL ? (
                <>
                  <div className="avatar">
                    <div className="w-12 ml-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={user?.photoURL} className="w-8 " alt="Shoes" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary pt-4 pl-4 ring-offset-base-100 ring-offset-2">
                      <BsPersonCircle />
                    </div>
                  </div>
                </>
              )}
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to={"/dashboard/porfile"} className="mb-3 ">
                  Profile
                </Link>

                <button
                  onClick={handleLogOut}
                  className="btn btn-primary text-white">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link className="btn" to="/signup">
            SignUp
          </Link>
        )}
      </div>

      <label
        htmlFor="my-drawer-2"
        tabIndex={2}
        className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;

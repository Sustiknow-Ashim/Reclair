import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import logo from '../../images/about/logo.png'


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
        navigate('/login')
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li tabIndex={0}>
                            <Link to="/project" className="justify-between">
                                Project
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Project</a></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost">
                    <img src={logo} className="h-6 w-100 mr-3 sm:h-9 rounded hover:rounded-lg" alt="Reclair Logo" />
                </Link>
                {/* <a className="btn btn-ghost normal-case text-xl">Reclair</a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li tabIndex={0}>
                        <Link to="/project">
                            Project
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="p-2">
                            <li><Link to='/myproject'>My Project</Link></li>
                            <li><a>Submenu </a></li>
                        </ul>
                    </li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='contact'>Contact Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <button onClick={handleLogOut} className="btn">Logout</button>
                        :
                        <Link className="btn" to='/signup'>SignUp</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
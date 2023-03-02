import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import ProjectDetails from "../Project/ProjectDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import AllUsers from "../AdminDashboard/AllUsers/AllUsers";
import AddProjects from "../AdminDashboard/AddProjects/AddProjects";
import UserProfile from "../Dashboard/UserProfile/UserProfile";
import Dashboard from "../Dashboard/Dashboard";
import AdminRoute from "../AdminDashboard/AdminRoute/AdminRoute";
import UserRoute from "../Dashboard/UserProfile/UserRoute";





export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/project',
                element:<ProjectDetails></ProjectDetails>
            },
            
        ]
    },
    {
        path:'/dashboard',
        element: <PrivateRoute><AdminDashboard></AdminDashboard></PrivateRoute>,
        children:[
            {
                path:'/dashboard/allusers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'/dashboard/addprojects',
                element:<AdminRoute><AddProjects></AddProjects></AdminRoute>
            },
            {
                path:'/dashboard/porfile',
                element:<UserProfile></UserProfile>
            },
            {
                path:'/dashboard/user',
                element: <UserRoute><Dashboard></Dashboard></UserRoute>
            },
            
        ]
    },

    
])
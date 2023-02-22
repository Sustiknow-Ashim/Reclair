import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Project from "../Project/Project";
import SignUp from "../SignUp/SignUp";
import ProjectDetails from "../Project/ProjectDetails";
import Dashboard from "../Dashboard/Dashboard";





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
                path:'/dashboard',
                element:<Dashboard></Dashboard>
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
                element:<AllUsers></AllUsers>
            },
            {
                path:'/dashboard/addprojects',
                element:<AddProjects></AddProjects>
            }
        ]
    }
])
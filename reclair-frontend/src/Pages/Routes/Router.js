import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import ProjectDetails from "../Project/ProjectDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import InvestmentDashboard from "../Dashboard/InvestmentDashboard/InvestmentDashboard";
import OrganizationRoute from "./OrganizationRoute";
import InvestmentRoute from "./InvestmentRoute";
import DashboardLayout from "../Dashboard/DashboardLayout";
import AllUsers from "../Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import Organization from "../Dashboard/Organization/Organization";
import AddProjects from "../Dashboard/AddProjects/AddProjects";
import Errors from "../Errors/Errors";
import ProjectRequest from "../Dashboard/ProjectRequest/ProjectRequest";





export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Errors></Errors>,
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
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
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
                path:'/dashboard/investment',
                element:  <InvestmentRoute><InvestmentDashboard></InvestmentDashboard></InvestmentRoute>
            },
            {
                path:'/dashboard/request',
                element:  <InvestmentRoute><ProjectRequest></ProjectRequest></InvestmentRoute>
            },
            {
                path:'/dashboard/organization',
                element: <OrganizationRoute><Organization></Organization></OrganizationRoute>
            },
            
        ]
    },

    
])
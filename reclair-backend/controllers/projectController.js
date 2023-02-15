import asyncHandler from 'express-async-handler';
import Project from '../models/projectModel.js';

// @desc Fetch all project
// @route GET /api/project
// @access Public
const getProjects = asyncHandler(async (req, res) => {
    const projects = await Project.find({});

    res.send(projects)
})

// @desc Fetch single project
// @route GET /api/project/:id
// @access Public
const getProjectById = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id)

    if (project) {
        res.json(project)
    } else {
        res.status(404)
        throw new Error('project not found')
    }
})




// @desc    Adding a new project
// @route   POST /api/project
// @access  Public

const addProject = asyncHandler(async (req, res) => {
    const { name, image, organization, project_type, ppa_details, project_approx_area, number_of_floor, seller_address, seller_website, total_project_cost, percent_of_investment_done, ppa_rate, min_investment, ppa_duration } = req.body;


    const project = await Project.create({
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
        ppa_rate, min_investment, 
        ppa_duration
    })

    if (project) {
        res.status(201)
        res.json({
            _id: project._id,
            name: project.name, 
            image: project.image, 
            organization: project.organization, 
            project_type: project.project_type, 
            ppa_details: project.ppa_details, 
            project_approx_area: project.project_approx_area, 
            number_of_floor: project.number_of_floor, 
            seller_address: project.seller_address, 
            seller_website: project.seller_website, 
            total_project_cost: project.total_project_cost, 
            percent_of_investment_done: project.percent_of_investment_done, 
            ppa_rate: project.ppa_rate, 
            min_investment: project.min_investment, 
            ppa_duration: project.ppa_duration
        })
    } else {
        res.status(400)
        throw new Error('Invalid project data')
    }
})

export { getProjects, getProjectById, addProject }
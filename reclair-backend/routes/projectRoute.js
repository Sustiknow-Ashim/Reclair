import express from "express";
import { addProject, getProjectById, getProjects } from "../controllers/projectController.js";
const router = express.Router();

router.post('/', addProject)

router.route('/').get(getProjects)

router.route('/:id').get(getProjectById)

export default router;
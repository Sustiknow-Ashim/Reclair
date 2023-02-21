import express from "express";
import { addUser, getUserById, getUsers,  } from "../controllers/userController.js";
const router = express.Router();



router.post('/', addUser)

router.route('/').get(getUsers)

router.route('/:id').get(getUserById)


export default router;
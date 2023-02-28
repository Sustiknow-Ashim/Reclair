import express from "express";
import { addUser, deleteUser, getUserById, getUsers, makeAdmin,  } from "../controllers/userController.js";
const router = express.Router();



router.post('/', addUser)

router.route('/').get(getUsers)

router.route('/:email').get(getUserById)

router.route('/:id').delete(deleteUser)

router.route('/makeadmin/:id').put(makeAdmin)



export default router;
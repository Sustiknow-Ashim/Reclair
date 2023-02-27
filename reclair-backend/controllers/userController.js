import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';



// @desc Fetch all user
// @route GET /api/user
// @access Public
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.send(users)
})


// @desc Fetch single user
// @route GET /api/user/:id
// @access Public
const getUserById = asyncHandler(async (req, res) => {
    // const user = await User.findById(req.params.id)
    const email = await User.findOne({email:req.params.email})


    if (email) {
        res.json(email)
    } else {
        res.status(404)
        throw new Error('email not found')
    }

    // if (user) {
    //     res.json(user)
    // } else {
    //     res.status(404)
    //     throw new Error('user not found')
    // }
})



// @desc    Adding a new user
// @route   POST /api/user
// @access  Public

const addUser = asyncHandler(async (req, res) => {
    const user = req.body;
    console.log(user)
    const result = await User.create(user)


    if (result) {
        res.status(201)
        res.send(result)
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

export {  addUser, getUserById, getUsers }
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
    console.log(req.body)


    const userExists = await User.findOne({email : user.email});

    if(userExists){
        res.send('User already exists')
    }else{
        const result = await User.create(user)

    if (result) {
        res.status(201)
        res.send(result)
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
    }
})





// @desc    Delete a user
// @route   DELETE /api/user/:id   // api/user/makeadmin/:id
// @access  Public

const deleteUser = asyncHandler(async (req, res) => {
    const result = await User.deleteOne({_id: req.params.id})
    if (result) {
        res.status(200).send(result)
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})


// @desc    Make admin
// @route   PUT api/user/makeadmin/:id
// @access  Private
const makeAdmin = asyncHandler(async (req, res) => {
    const result = await User.findOneAndUpdate({_id: req.params.id}, {role: 'Admin'}, {returnNewDocument : true})
    console.log(result)
    if (result) {
        res.status(200).send(result)
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})



export {  addUser, getUserById, getUsers, deleteUser, makeAdmin }
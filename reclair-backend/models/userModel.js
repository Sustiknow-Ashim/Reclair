import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
        },
        image:{
            type: String,
        },
        password:{
            type: String,
        },
        role:{
            type: String,
            default: 'user'
        }
    },
    {
        timestamps: true,
    }
)

const User = mongoose.model('User', userSchema)

export default User
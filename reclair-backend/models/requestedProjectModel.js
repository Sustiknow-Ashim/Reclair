import mongoose from 'mongoose'

const projectRequested = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        org_name: {
            type: String,
            required: true,
        },
        project_type: {
            type: String,
            required: true,
        },
        project_capacity: {
            type: String,
            required: true,
        },
        project_approx_area: {
            type: String,
            required: true,
        },
        number_of_floor: {
            type: String,
            required: true,
        },
        seller_address: {
            type: String,
            required: true,
        },
        seller_website: {
            type: String,
            required: true,
        },
        average_consume: {
            type: String,
            required: true,
        },
        last_electric_bill: {
            type: String,
            required: true,
        },
        approx_project_cost: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const ProjectRequested = mongoose.model('RequestedProject', projectRequested)

export default ProjectRequested
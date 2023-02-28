import mongoose from 'mongoose'

const projectSchema = mongoose.Schema(
    {
        // user: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     required: true,
        //     ref: 'User',
        // },
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        organization: {
            type: String,
            required: true,
        },
        project_type: {
            type: String,
            required: true,
        },
        ppa_details: {
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
        total_project_cost: {
            type: String,
            required: true,
        },
        percent_of_investment_done: {
            type: String,
        },
        ppa_rate: {
            type: String,
            required: true,
        },
        min_investment: {
            type: String,
            required: true,
        },
        ppa_duration: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const Project = mongoose.model('Project', projectSchema)

export default Project
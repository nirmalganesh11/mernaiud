import mongoose from 'mongoose'

const courseSchema = mongoose.Schema({

    name:{
        type : String,
        required: false
    },
    // images:[{
    //     type : String,
    // }],
    description:{
        type : String,
        required: false
    }
    // category:[{
    //     type : String,
    //     required: true
    // }],
    // sizes:[{
    //     type : String,
    //     required: true
    // }],
    // reviews: [reviewSchema],
    // rating:{
    //     type : Number,
    //     required: true,
    //     default: 0
    // },
    // numReviews:{
    //     type : Number,
    //     required: true,
    //     default: 0
    // },
    // price:{
    //     type : Number,
    //     required: true,
    //     default: 0
    // },
    // countInStock:{
    //     type : Number,
    //     required: true,
    //     default: 0
    // },
},{
    timestamps: true
}) 

const Course = mongoose.model('Course', courseSchema)  

export default Course
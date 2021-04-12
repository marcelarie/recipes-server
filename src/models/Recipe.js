import mongoose from "mongoose";

const RecipeSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    imageUrl: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    },
    ingridients: [{
        type: String,
        require: true
    }],
    author: {
        type: String,
        require: true
    },
    comments: [{
        type: String,
    }],
    upVotes: {
        type: String,
        require: true
    },
    downVotes: {
        type: String,
        require: true
    },
})


export default mongoose.model('Recipe', RecipeSchema)

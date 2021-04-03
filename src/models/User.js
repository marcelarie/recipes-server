import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    }
})

UserSchema.pre('save', async function() {
    console.log(this)
})

export default mongoose.model('User', UserSchema)

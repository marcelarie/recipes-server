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
    const salt = await bcrypt.genSalt(10)
    console.log('Before ', this.password)

    try {
        this.password = await bcrypt.hash(this.password, salt)
        console.log('After ', this.password)
    } catch (error) {
        response.json({ message: error })
    }
})

export default mongoose.model('User', UserSchema)

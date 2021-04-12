import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


async function getAllUsers(request, response) {
    try {
        const users = await User.find();
        response.json(users)
    } catch (error) {
        response.json({ message: error })
    }
}
async function singUp({ body }, response) {

    const user = new User(body)

    try {
        const result = await user.save()
        response.status(200).json(result)
    } catch (error) {
        response.json({ message: error })
    }
}

async function login({ body }, response) {
    try {
        const user = await User.findOne({ username: body.username });
        const passwordCheck = await bcrypt.compare(body.password, user.password)
        const token = jwt.sign(
            { id: user._id },
            process.env.SECRET,
            { expiresIn: 86400 }
        )
        response.cookie('token', token, { httpOnly: true })
        response.json(
            {
                user: user,
                auth: passwordCheck,
                token
            }
        )
    } catch (error) {
        response.json({ message: error })
    }
}

export { singUp, login, getAllUsers }

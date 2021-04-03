import User from '../models/User.js.js'

async function singUp({ body }, response) {

    try {
        const user = await new User({
            email: body.email,
            password: Password
        })
        response.json(user)
    } catch (error) {
        response.json({ message: error })
    }
}

async function login(request, response) {

}

export { singUp, login }

import User from '../models/User.js'

async function singUp({ body }, response) {
    const user = new User({
        username: body.username,
        email: body.email,
        password: body.password
    })

    try {
        const result = await user.save()
        response.status(200).json(result)
    } catch (error) {
        response.json({ message: error })
    }
}

async function login(request, response) {
    console.log(request)
    console.log(response)
}

export { singUp, login }

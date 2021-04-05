import User from '../models/User.js'

async function getAllUsers(request, response) {
    try {
        const users = await User.find();
        console.log(users)
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

async function login(request, response) {
    console.log(request)
    console.log(response)
}

export { singUp, login, getAllUsers }

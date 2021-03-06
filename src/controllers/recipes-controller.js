import Recipe from '../models/Recipe.js'

async function getAllRecipes(request, response) {
    try {
        const recipes = await Recipe.find();
        response.json(recipes)
    } catch (error) {
        response.json({ message: error })
    }
}

async function getRecipeById({ params: { id } }, response) {
    try {
        const recipe = await Recipe.findById(id);
        response.json(recipe)
    } catch (error) {
        response.json({ message: error })
    }
}

async function addNewRecipe({ body }, response) {

    const recipe = new Recipe(body)

    try {
        const result = await recipe.save()
        // response.status(200).json(result)
        response.status(200).json({ message: true })
    } catch (error) {
        response.json({ message: error })
    }
}

async function removeRecipeById({ params: { id } }, response) {
    try {
        const recipe = await Recipe.remove({ _id: id })
        response.json(recipe)
    } catch (error) {
        response.json({ message: error })
    }
}

async function updateRecipeById({ params: { id }, body }, response) {

    await Recipe.findByIdAndUpdate(
        id,
        { ...body },
        (error, result) => {
            error
                ? response.send(error)
                : response.send(result)
        })
}

export { getAllRecipes, addNewRecipe, getRecipeById, removeRecipeById, updateRecipeById }

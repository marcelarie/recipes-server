import express from 'express'

import {
    getAllRecipes,
    addNewRecipe,
    getRecipeById,
    removeRecipeById,
    updateRecipeById
} from '../controllers/recipes-controller.js'

const recipesRouter = express.Router();

recipesRouter.get('/', getAllRecipes);
recipesRouter.post('/:id', getRecipeById);
recipesRouter.delete('/:id', removeRecipeById);
recipesRouter.patch('/:id', updateRecipeById);
recipesRouter.post('/new', addNewRecipe);

export default recipesRouter

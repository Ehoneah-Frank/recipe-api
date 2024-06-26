import { Router } from "express";
import { getRecipes, postRecipe, patchRecipe, deleteRecipe, getRecipe } from "../controllers/recipe.js";


// Create router
const recipeRouter = Router();

// Define routes
recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes', postRecipe);

recipeRouter.patch('/recipes/:id', patchRecipe);

recipeRouter.delete('/recipes/:id', deleteRecipe);

recipeRouter.get('/recipes/:id', getRecipe);


// Export Router
export default recipeRouter;
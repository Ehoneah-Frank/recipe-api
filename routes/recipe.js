import { Router } from "express";
import { getRecipes, postRecipe, patchRecipe, deleteRecipe, getRecipe } from "../controllers/recipe.js";
import { remoteUpload } from "../middlewares/upload.js";
import { checkUserSession } from "../middlewares/auth.js";


// Create router
const recipeRouter = Router();

// Apply middlewares
// recipeRouter.use(checkUserSession);


// Define routes
recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes', checkUserSession, remoteUpload.single('image'), postRecipe);

recipeRouter.patch('/recipes/:id', checkUserSession, patchRecipe);

recipeRouter.delete('/recipes/:id', checkUserSession, deleteRecipe);

recipeRouter.get('/recipes/:id', getRecipe);


// Export Router
export default recipeRouter;
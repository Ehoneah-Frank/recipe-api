import { RecipeModel } from "../models/recipe.js";

RecipeModel



// Get all recipes
export const getRecipes = async (req, res, next) => {
    try {
        // Get all recipes from database
        const allRecipes = await RecipeModel.find();
        // Return all recipes as response
        res.json(allRecipes);
    } catch (error) {
        next(error);

    }
}


// Post recipe

export const postRecipe = async (req, res, next) =>{
    try {
        // Add recipe to database
        const newRecipe = await RecipeModel.create(req.body);
        res.json(newRecipe);
    } catch (error) {
        next(error);
    }
}


// Patch Recipe

export const patchRecipe = async (req, res, next) =>{
    try {
        const patchRecipe = await RecipeModel.findModel.findByIdAndUpdate(req.params.id);
        res.json(`Recipe with ID ${req.params.id} updated`);

    } catch (error) {
        newRecipe(error);
    }
    
}




// Delete Recipe 
export const deleteRecipe =async (req, res, next) =>{
    try {
        // Delete recipe by id
        const deleteRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
        // Return response
        res.json(deleteRecipe);
    } catch (error) {
        next(error);
    }
}


//  Get Recipe
export const getRecipe = (req, res) =>{
    res.json(`Recipe with ID ${req.params.id} is shown`);
}
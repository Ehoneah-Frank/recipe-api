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

        // Updated recipe by id
        const updatedRecipe = await RecipeModel.findByIdAndUpdate(req.params.id, req.body);
        
        // Return response
        res.json(updatedRecipe);

    } catch (error) {
        newRecipe(error);
    }
    
}




// Delete Recipe 
export const deleteRecipe =async (req, res, next) =>{
    try {
        // Delete recipe by id
        const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
        // Return response
        res.json(delete+Recipe);
    } catch (error) {
        next(error);
    }
}


//  Get Recipe
export const getRecipe = (req, res) =>{
    res.json(`Recipe with ID ${req.params.id} is shown`);
}
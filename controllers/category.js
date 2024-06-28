import { CategoryModel } from "../models/category.js";



export const getCategories = async (req, res, next) => {
    try {
        // Get all category from database
        const allCAtegories = await CategoryModel.find();
        // Return response
        res.json(allCAtegories);



    } catch (error) {
        next(error);
    }
}

export const postCategory = async (req, res, next) => {
    try {
        // Add category to databse
        const newCategory = await CategoryModel.create(req.body);
        // Return response
        res.status(201).json(newCategory);
    } catch (error) {
        
    }
}
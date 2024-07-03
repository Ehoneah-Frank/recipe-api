import { CategoryModel } from "../models/category.js";



export const getCategories = async (req, res, next) => {
    try {
        // Get query params
        const {
            filter = "{}",
            fields = "{}",
            limit = 10,
            skip = 0,
            sort = 0 } = req.query;

        // Get all category from database
        const allCAtegories = await CategoryModel
            .find(JSON.parse(filter))
            .select(JSON.parse(fields))
            .limit(limit)
            .skip(skip);

        // Return response
        res.json(allCAtegories);



    } catch (error) {
        next(error);
    }
}

export const postCategory = async (req, res, next) => {
    try {
        // Add category to databse
        const newCategory = await CategoryModel.create({
            ...req.body,
            image: req.file.filename
        });
        // Return response
        res.status(201).json(newCategory);
    } catch (error) {
        next(error);
    }
}
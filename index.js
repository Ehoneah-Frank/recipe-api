import express from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe.js";
import 'dotenv/config';
import categoryRouter from "./routes/category.js";



// Connect to database
await mongoose.connect(process.env.MONGO_URL)
// create Express App
const app = express();


//Apply middlewares
app.use(express.json());



// Use routes
app.use(recipeRouter);
app.use(categoryRouter);

// Listen for incoming requests
app.listen(3000, () =>{
    console.log('App listening on port 3000')
});

// Listen for incoming requests
const port = process.env.Port || 3500;
app.listen(port, () =>{
    console.log(`App listening on port &{port}`);
})

// f3CLaqg3Xu5oXqJu
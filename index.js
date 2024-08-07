import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import recipeRouter from "./routes/recipe.js";
import 'dotenv/config';
import categoryRouter from "./routes/category.js";
import expressOasGenerator from "express-oas-generator";
import cors from "cors";
import userRouter from "./routes/user.js";



// Connect to database
await mongoose.connect(process.env.MONGO_URL)

// create Express App
const app = express();
expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true,
    tags: ['categories', 'recipes'],
    mongooseModels: mongoose.modelNames(),
});


//Apply middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));



// Use routes
app.use(userRouter);
app.use(recipeRouter);
app.use(categoryRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));

// Listen for incoming requests
app.listen(3000, () => {
    console.log('App listening on port 3000')
});








// Listen for incoming requests
// const port = process.env.Port || 3500;
// app.listen(port, () =>{
//     console.log(`App listening on port &{port}`);
// })

// f3CLaqg3Xu5oXqJu
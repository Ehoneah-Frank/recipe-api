import express from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe.js";
import 'dotenv/config';



// Connect to database
await mongoose.connect(process.env.MONGO_URL)
// create Express App
const app = express();


//Apply middlewares
app.use(express.json());

// Define routes
app.get('/', (req, res)=>{
    res.json('Welcome Home');
});

app.post('/login', (req, res) =>{
    res.json("Login successsful");
});

app.get('/about', (req, res) =>{
    res.json("This is all about us");
});

app.patch('/blog', (req, res) =>{
    res.json("Breaking News!!");
});

// Use routes
app.use(recipeRouter);
// Listen for incoming requests
app.listen(3000, () =>{
    console.log('App listening on port 3000')
});


// f3CLaqg3Xu5oXqJu
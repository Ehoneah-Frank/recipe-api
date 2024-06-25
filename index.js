import express from "express";
import recipeRouter from "./routes/recipes.js";

// create Express App
const app = express();

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
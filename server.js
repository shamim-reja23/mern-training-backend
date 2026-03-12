import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoute from './routes/authRoute.js'
import userRoute from './routes/userRoute.js'
import taskRoute from './routes/taskRoute.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())// enable parsing of JSON request bodies

app.use("/auth", authRoute); 

connectDB();


app.get("/", (req, res) => {
    res.send('Hello World !!');
})

app.use("/users", userRoute)
app.use("/tasks", taskRoute)

// app.post("/users", (req, res) => {
//     res.json('user created !!')
// })

// app.post("/users", (req, res) => {
//     console.log(req.body);
//     res.json({ received: req.body })
// })

// app.use((req, res, next) => {
//     console.log('Middleware 1');
//     // next();
// })

// app.get("/", (req, res) => {
//     res.send('Home');
// })

// app.use((req, res, next) => {
//     console.log('Middleware 2');
//     next();
// })
app.listen(PORT, () => {
    console.log(`Example app listening on ${PORT}`);
    
})
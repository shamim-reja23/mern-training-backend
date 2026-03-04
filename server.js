import express from "express";
import userRoute from './routes/userRoute.js'
const app = express();
const port = 4000;

app.use(express.json()); // enable parsing of JSON request bodies

app.get("/", (req, res) => {
    res.send('Hello World !!');
})

app.use("/users", userRoute)


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
app.listen(port, () => {
    console.log(`Example app listening on ${port}`);
    
})
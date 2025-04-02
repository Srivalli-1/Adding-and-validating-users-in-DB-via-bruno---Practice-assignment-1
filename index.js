require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db") 
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3010;


connectDB();

app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the User Registration API!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

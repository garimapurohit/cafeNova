const connectDB = require("./config/db");
const foodRoutes = require("./routes/foodRoutes");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/foods", foodRoutes);

app.get("/", (req, res) => {
    res.send("CafeNova Backend is running!");
});

const PORT = 5000;
connectDB();
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
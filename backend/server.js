import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();

connectDB(); //Connect to DB

const app = express();
const port = process.env.PORT || 2000;

app.get("/", (req, res) => {
    res.send("API is working fine ...");
});

app.use("/api/product", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on ${port} port.`);
});

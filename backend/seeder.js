// This file is separate from the Application.
// Just to bring the dummy data into the DB

import dotenv from "dotenv";
// import mongoose from "mongoose";
import colors from "colors";
import products from "./data/products.js";
import users from "./data/users.js";
import Order from "./models/orderModel.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await User.deleteMany();
        await Product.deleteMany();
        //First, we have to delete everything to insert

        const createdUsers = await User.insertMany(users);

        const adminUserId = createdUsers[0]._id;

        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUserId };
        });
        //Since, only the admin can create new product

        await Product.insertMany(sampleProducts);

        console.log("Data Imported".green.inverse);
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await User.deleteMany();
        await Product.deleteMany();

        console.log("Data Destroyed".yellow.inverse);
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1);
    }
};

if (process.argv[2] === "-d") {
    destroyData();
} else {
    importData();
}

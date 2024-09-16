import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    address: String,
    borough: String,
    cuisine: String,
    grades: []
})
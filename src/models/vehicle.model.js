import mongoose, {Schema, models} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const vehicleSchema = new Schema({
    licensePlate: {
        type: String,
        required: true,
        unique: true,
    },
    carPhoto:{
        type: String, //cloudinary url
    },
    typeOfCar:{
        type: String,
        required: true
    },
    carModel:{
        type: String,
        required: true
    }
        
})

export const vehicle = mongoose.model("Vehicle", vehicleSchema);
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({    
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    password:{
        type: String,
        required: true,
    }
});

export const ReactUser = mongoose.model("ReactUser", userSchema);
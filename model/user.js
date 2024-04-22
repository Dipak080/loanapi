const mongoose = require("mongoose");
const ErrorHandler = require("../utils/ErrorHandler");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
    },
    mobile_number: {
        type: String,
        required: [true, "Please enter your mobile number!"],
    },
    email_id: {
        type: String,
        required: [true, "Please enter your email!"],
        unique: true // Ensuring email uniqueness
    },
    address: {
        type: String,
        required: [true, "Please enter your address!"],
    },
    capture_image: {
        type: String, // URL or path to the image
        required: [true, "Please upload an image!"]
    },
    aadhar: {
        type: String,
        required: [true, "Please enter your Aadhar number!"],
        unique: true // Assuming Aadhar number should be unique
    },
    pan: {
        type: String,
        required: [true, "Please enter your PAN number!"],
        unique: true // Assuming PAN number should be unique
    },
    bank_account_number: {
        type: String,
        required: [true, "Please enter your bank account number!"]
    },
    statement_upload: {
        type: String, // URL or path to the uploaded file
        required: [true, "Please upload your bank statement!"]
    },
    role_selection: {
        type: String,
        required: [true, "Please select a role!"],
        enum: ['loan_seeker', 'investor'] // Restrict to these roles
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minLength: [4, "Password should be greater than 4 characters"],
        select: false // Do not return the password by default
    },
    confirm_password: {
        type: String,
        required: [true, "Please confirm your password"],        
        select: false
    }
},
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("User", userSchema);

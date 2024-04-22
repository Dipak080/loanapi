const express = require("express");
const User = require("../model/user");
const router = express.Router();
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const jwt = require("jsonwebtoken");
const sendToken = require("../utils/jwtToken");

// create user
router.post("/create-user", async (req, res, next) => {
    try {
        // Destructure all fields from req.body
        const {
            name,
            mobile_number,
            email_id,
            address,
            capture_image,
            aadhar,
            pan,
            bank_account_number,
            statement_upload,
            role_selection,
            password,
            confirm_password
        } = req.body;

        // Check if user with the same email or Aadhar or PAN already exists
        const existingUser = await User.findOne({
            $or: [{ email_id }, { aadhar }, { pan }]
        });

        if (existingUser) {
            return next(new ErrorHandler("User with this Email, Aadhar, or PAN already exists", 400));
        }

        // Check if password and confirm_password match
        if (password !== confirm_password) {
            return next(new ErrorHandler("Passwords do not match", 400));
        }

        // Create a new user with all the validated fields
        const user = await User.create({
            name,
            mobile_number,
            email_id,
            address,
            capture_image,
            aadhar,
            pan,
            bank_account_number,
            statement_upload,
            role_selection,
            password,
            confirm_password
        });

        // Respond with the newly created user's ID
        res.status(201).json({
            success: true,
            userid: user._id
        });

    } catch (error) {
        return next(new ErrorHandler(error.message, 500)); // Using HTTP 500 for general server errors
    }
});

module.exports = router; // Export the router
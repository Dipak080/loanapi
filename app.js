const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware

app.use(cors()); // Enable CORS for all routes

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use('/uploads', express.static('uploads'));

// const path = require('path')
// app.use('/static', express.static(path.join(__dirname, 'public')))

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "config/.env",
    });
}

// import routes
const user = require("./controller/user");
// Mount the userRouter at the desired base URL


// Mount the userRouter at the desired base URL
const api_url = '/api/v1/';
app.use(api_url+'user', user);


// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;

const express = require("express");
const { userSignup, userLogin } = require("../controllers/user.controller");


const userRoute = express.Router();

userRoute.post('/signup', userSignup);
userRoute.post('/login', userLogin);

module.exports={
    userRoute
}
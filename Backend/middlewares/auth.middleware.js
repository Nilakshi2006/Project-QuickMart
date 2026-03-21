// Used for authentication, authorization, or error handling.
const { userModel } = require("../models/user.model");
const jwt = require("jsonwebtoken");
require('dotenv').config();


const auth = async(req, res, next) =>{
    const token = req.headers.authorization;
    // console.log(token)
    if(!token){
       return res.send({msg:"Invalid token"})
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        const userId = decoded.userID;
        const matchedUser = await userModel.findOne({_id:userId});
        if(matchedUser){
            req.headers = decoded.userID
            next();
        }else{
            return res.status(400).send({msg:"user not authorized"})
        }

    } catch (error) {
        return res.send({msg:error.message});
    }
};

module.exports={
    auth
}
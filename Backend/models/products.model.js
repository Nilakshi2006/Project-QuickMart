const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title:{
        type:String
    },
    brand:{
        type:String
    },
    image:{
        type:String
    },
    price:{
        type:Number
    },
    desc:{
        type:String
    },
    rating:{
        type:Number
    },
    category:{
        type:String
    }
});

const productModel = mongoose.model("product", productSchema);

module.exports={
    productModel
}



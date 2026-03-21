// Contains the logic for what happens when each route is called.
const { productModel } = require("../models/products.model");

const createProduct=async(req, res)=>{
    const {title, image, price, brand, category, desc, rating} = req.body;

    try {
        const data = new productModel({title, image, price, brand, category, desc, rating});
        await data.save();

        res.status(200).send({msg:"Data stored successful", data:data})

    } catch (error) {
        res.status(400).send({error:error.message})
    }
};

const getProduct=async(req, res)=>{
    try {
        const data = await productModel.find();

        res.status(200).send({msg:"Data retrieved successful", data:data})
    } catch (error) {
         res.status(400).send({error:error.message})
    }
};


module.exports={
    createProduct, getProduct
}

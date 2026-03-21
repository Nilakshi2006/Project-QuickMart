const { userModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const userSignup = async (req, res) => {
    const { name, email, password, phoneNumber, age, role } = req.body;
    console.log(req.body);

    const userExist = await userModel.findOne({ email });

    if (userExist) {
        return res.status(400).send({msg:"user already exist"});
    }
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                return res.status(400).send("Error while hashing")
            } else {
                const user = new userModel({ name, email, password: hash, phoneNumber, age, role });
                await user.save();
                res.status(200).send({msg:"User data successfully stored in DB", user:user})
            }
        });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }


}

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    // console.log(req.body);

    const userExist = await userModel.findOne({ email });
    // console.log(userExist)

    if (!userExist) {
        return res.status(400).send({msg:"User does not exist..."});
    }
    try {
        bcrypt.compare(password, userExist.password, async (err, result) => {

            const token = jwt.sign({userID: userExist._id}, 'RB', { expiresIn: '5h' });

            if (!result) {
                return res.status(401).send({ msg: "Error while hashing" })
            } else {
                res.status(200).send({ msg: "User logged in successful", token :token, user: userExist})
            }
        });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }

}


module.exports = {
    userSignup, userLogin
}

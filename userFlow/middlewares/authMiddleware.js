const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

const authMiddleware = async(req,res,next)=>{
    try {
        let token = req.headers.authorization;
        if(!token){
            return res.status(401).json({message:"User not authorized"})
        }
        token = token.replace("Bearer ","");

        const verify = await jwt.verify(token, process.env.JWT_SECRET)
        const user = await UserModel.findById(verify.id)
        if(!user){
            return res.status(400).json({message:"User not found"})
        }

        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"User not authorized"})
    }
}

module.exports = authMiddleware
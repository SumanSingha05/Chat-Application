import { User } from "../models/userModel";
import bcrypt from "bcryptjs";

export const register = async(req,res) => {
    try{
        const {fullname, username, password, confirmPassword, gender} = req.body;
        if(!fullname, !username, !password, !confirmPassword, !gender){
            return res.status(400).json({message:"All fields are required"});
        }
        if(password != confirmPassword){
            return res.status(400).json({message:"Password do not match"});            
        }
        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({message:"Username already exit try different"});
        }
        // converting normal password to hashed password 

        const hashedPassword = await bcrypt.hash(password, 10);

        //profile photo
        const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${username}`;
     
        await User.create ({
            fullname,
            username,
            password:hashedPassword,
            profilePhoto: gender === male ? maleProfilePhoto:femaleProfilePhoto,
            gender
        })          
        
    }catch(error){
        console.log(error);
        
    }
}
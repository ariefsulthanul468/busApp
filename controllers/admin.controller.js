const AdminRegister = require("../models/admin.register")
const bcrypt = require("bcrypt")


exports.Register = async (req,res)=>{
    try {
        const {Name,email,password,confirm_password} = req.body;
        console.log(Name,email,password,confirm_password)
        if(!Name || !email || !password || !confirm_password){
            return res.status(400).json({message:"Please fill all field"})
        }
        else if( password != confirm_password ){
            return res.status(400).json({message:"password and confirm both or not same"})
        }
        bcrypt.hash(password,10,(err,hashedPassword)=>{
            if(err){
                return res.json({message:err})
            }  
        })
        const insert_query = await AdminRegister.create({
            Name,
            email,
            password,
            confirm_password:hashedPassword
        })
        return res.status(200).json({message:insert_query})   
    } catch (error) {
        return res.status(500).json({message:error})
    } 
}




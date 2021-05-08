import Users from '../models/Users.js';
export const createUser=async(req,res)=>{
    const user=await Users.create(req.body);
    res.status(200).json(user);
}
export const getUser=async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const user=await Users.find({email:email,password:password});
    // console.log(user);
    if(user.length===0)
    {
        res.status(404).json({
            success:false
        });
    }
    else
    {
        res.status(200).json({
            success:true
        });
    }
}

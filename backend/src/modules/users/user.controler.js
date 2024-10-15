import { User } from "../../../database/model/user.model.js";
import { AppErr } from "../../midleware/catcherr.js";

export const updateUserAccount = async (req, res, next) => {
  let { id } = req.params;
  

  if (id != req.user.id)
    return next(new AppErr("not authorize to update user", 403));
  else {
    let {  email, phone, firstName, lastName } =
      req.body;
    let user = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          
          email,
          phone,
          firstName,
          lastName,
        },
      },
      { new: true }
    );
    res.status(201).json(user);
  }
};
export const deleteAccount = async (req, res, next) => {
  let { id } = req.params;

  if (id != req.user.id || req.user.role!="admin")
    return next(new AppErr("not authorize to delete user", 401));
  else {
    
      await User.findByIdAndDelete(id);
      return  res.status(201).json({ message: "account delete " });
    }
   
  
};
export const getAccount=async(req,res,next)=>{
  let { id } = req.params;

  if (id != req.user.id)
    return next(new AppErr("not authorize to access account", 403));
  else {
    

    let user = await User.findById(id);
  
    res.status(200).json({message:"uccess",user});
  }

}
export const getAllAccount=async(req,res,next)=>{
 
    let user = await User.find().select('-password');
  
    res.status(200).json({message:"uccess",user});
  

}





 
 import { Router } from "express";
import { errhandle } from "../../midleware/catcherr.js";
import { protectuser } from "../../midleware/protectuser.js";
import { verifyToken } from "../../midleware/tokenOperation.js";
import { validate } from "../../midleware/validation.js";
import { deleteAccount, getAccount, getAllAccount, updateUserAccount } from "./user.controler.js";
import { idValidation, updateUserValidation } from "./user.validation.js";
import { accessAllowTo } from "../../midleware/authorization.js";

 
  const userRoute= Router()
 
  
  //********** */ delete and update and get owner acount
  userRoute.get('/account/all',protectuser,accessAllowTo('admin'),errhandle(getAllAccount))

  userRoute.route('/:id')
  .put(validate(updateUserValidation),protectuser,errhandle(updateUserAccount))

  .delete(validate(idValidation),protectuser,errhandle(deleteAccount))
  .get(validate(idValidation),protectuser,errhandle(getAccount))


  export default userRoute
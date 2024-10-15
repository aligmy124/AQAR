import Jwt from "jsonwebtoken"
import { AppErr, errhandle } from "./catcherr.js"
import { User } from "../../database/model/user.model.js"
import { configDotenv } from "dotenv"

export const protectuser=
errhandle(
  async (req,res,next)=>{
        let {token}= req.headers
        if(!token)
          next(new AppErr('please sent token!!!!!',401))

        
        let payload = Jwt.verify(token,process.env.SECRET_KEY)
        console.log(payload);
        

        
        if(!payload) return next(new AppErr('invalid token!!!!!',401))
        

      
                
        req.user = payload
        let user = await User.findById(payload.id)
        if(!user) return next(new AppErr('user not found'))
        if(user.passwordChangedAt){
                let time= parseInt(user?.passwordChangedAt?.getTime()/1000)
                if(time>payload.iat)next(new AppErr('token is old',401))
              } 
          
              next()
        }
        


)
  
   
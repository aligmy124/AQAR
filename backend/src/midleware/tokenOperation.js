import  Jwt  from "jsonwebtoken"
import { AppErr } from "./catcherr.js"
import { configDotenv } from "dotenv"

configDotenv()
export const generatToken=(load)=>{
      let token = Jwt.sign(load,process.env.SECRET_KEY)
      return token

}
export const verifyToken=(req,res,next)=>{
      let {token}= req.headers
      console.log("load.....");
      
       let load = Jwt.verify(token,process.env.SECRET_KEY,(err,payload)=>{
            if(err) return next( new AppErr("invalid token",402))
                     req.user = load
      next()
       })
      console.log(load);

      // if (!load ) return next(new AppErr('please verfy token',403))
      // req.user = load
      next()
}
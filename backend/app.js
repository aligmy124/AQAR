import express from 'express'

import { configDotenv } from 'dotenv'
import './database/dbconection.js'
import { AppErr } from './src/midleware/catcherr.js'
import globalerr from './src/midleware/globalerr.js'
import authRoute from './src/modules/auth/auth.routes.js'
import propertyRoute from './src/modules/property/property.routes.js'
import userRoute from './src/modules/users/user.routes.js'
configDotenv()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/uploads",(express.static('uploads')))




// authentication for user api

app.use('/api/auth',authRoute)
app.use('/api/user',userRoute)
app.use('api/property',propertyRoute)



app.use("*",(req,res,next)=>{
      next(new AppErr('page not found',404))
})
app.use(globalerr)

const port =  process.env.PORT ||3000 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
import Joi from "joi";

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net)$/
const fileSchema = Joi.object({
    originalname: Joi.string().required(),
    mimetype: Joi.string().valid('image/jpeg', 'image/png', 'image/gif').required(),
    fieldname:Joi.string(),
    encoding:Joi.string(),
    destination:Joi.string(),
    filename:Joi.string(),
    path:Joi.string(),
    size:Joi.number(),
  });

 export const addProperty=  Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    type: Joi.string().required(),
    location: Joi.string().optional(),
    area: Joi.number().required(),
    bedrooms: Joi.number().optional(),
    bathrooms: Joi.number().optional(),
    images:Joi.array().items(fileSchema).min(1).required(),


})

export const updateProperty  = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    type: Joi.string().required(),
    location: Joi.string().optional(),
    area: Joi.number().required(),
    bedrooms: Joi.number().optional(),
    bathrooms: Joi.number().optional(),
    images:Joi.array().items(fileSchema).min(1).required(),


})




  
 export const idValidation=  Joi.object({
     id:Joi.string().required().length(24)
 })
 
 
 export const queryProperty=  Joi.object({
     name: Joi.string(),
     
 })


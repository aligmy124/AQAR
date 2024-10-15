
import mongoose, { Schema,model } from "mongoose";

const proertySchema = new Schema({
      title: {
            type: String,
            required: true    // Title is required
          },
          description: {
            type: String,
            required: true    // Description is required
          },
          price: {
            type: String,
                
          },
          type: {
            type: String,     // Property type ( apartment, villa, land, etc.)
            required: true
          },
          location: {
            type: String,     // Location of the property
            required: true
          },
          area: {
            type: Number,     // Area in square meters
            required: true
          },
          bedrooms: {
            type: Number,     // Number of bedrooms
            
          },
          bathrooms: {
            type: Number,     // Number of bathrooms
            
          },
          images: {
            type: [String],   
            required: true
          },
          available: {
            type: Boolean,
            default:true,    // Whether the property is available or not
            required: true
          },
          listedDate: {
            type: Date,
            default: Date.now // Automatically set the listing date to current date
          },
          ownerId: {
            type: Schema.Types.ObjectId,
            ref: 'User' // Reference to the User model
          }
           
});
// Compile model from schema
export const  PropertyModel = model('Property', proertySchema );
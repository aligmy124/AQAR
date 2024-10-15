import { Schema, model } from "mongoose";

const userschema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  email: { type: String, required: true, unique: true },
  password: String,
  
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    default: "seller",
    enum: ["seller","admin"],
  },
  passwordChangedAt:Date,
  
  confirm: {
    type: Boolean,
    default: false,
  },
  otp: String,
  otpExpaire: Date,
});
// Compile model from schema
export const User = model("User", userschema);

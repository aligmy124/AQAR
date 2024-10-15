import { Router } from "express";
import { errhandle } from "../../midleware/catcherr.js";
import { verifyToken } from "../../midleware/tokenOperation.js";
import { validate } from "../../midleware/validation.js";
import {
  addProperty,
  idValidation,
  updateProperty,
} from "./property.validation.js";
import { protectuser } from "../../midleware/protectuser.js";
import { uploadImages } from "../../midleware/multer.js";

const propertyRoute = Router();

//  propertyRoute.route('/find').get(validate(queryCompany),verifyToken,errhandle(getCompanyByName))

propertyRoute.post(
  "/",
  protectuser,
  uploadImages,
  validate(addProperty),
  errhandle()
);

// propertyRoute.route('/:id')
// .put(validate(updateProperty),verifyToken,errhandle(updateCompanyData) )
// .delete(validate(idValidation),verifyToken,errhandle(deleteCompanyData))
// .get(validate(idValidation),verifyToken,errhandle(getCompanyData))

export default propertyRoute;

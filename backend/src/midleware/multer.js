import multer from "multer";
import { AppErr } from "./catcherr.js";


const  uploadImage=()=>{
  
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `uploads`);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now().toLocaleString() + "-" + Math.round(Math.random() + 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

function fileFilter(req, file, cb) {
  f (! /image\/(jpg|png|jpeg|gif)/.test( file.mimetype))
    return cb(new AppErr("only image please ", 401), false);
  cb(null, true);
}

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});
return upload

}

export const uploadImages=()=>{
  return uploadImage().array("images")
}



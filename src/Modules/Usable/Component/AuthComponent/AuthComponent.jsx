import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import image from "../../../../assets/img/image.jpg"

const AuthComponent = ({ form, image, imgHeader, imgText }) => {
  return (
    <div className="container-auth" style={{direction:"ltr"}}>
      <div className="row bg-succee wi">
        <div className="col">
          <div className="">{form}</div>
        </div>
        <div className="col">
        <img src={image} alt="login"  />
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;

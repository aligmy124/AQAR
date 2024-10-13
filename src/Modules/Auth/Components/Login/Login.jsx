import React from "react";
import authLogin from "../../../../assets/img/image.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"

import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
import AuthComponent from "../../../Usable/Component/AuthComponent/AuthComponent";
import Typography from "@mui/material/Typography";

export default function Login() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({ defaultValues: { email: "", password: "" } });

  const navigate = useNavigate();

  // Submit function to handle login
  // const Submit = async (data) => {
  //   try {
  //     const response = await axios.post(AUTH_ADMIN_ENDPOINTS.LOGIN, data);
  //     localStorage.setItem("token", response.data.data.token);
  //     toast.success("Logged in successfully");
  //     navigate("/dashboard");
  //   } catch (error) {
  //     toast.error(error?.response?.data?.message);
  //   }
  // };

  // Form rendering
  const form = () => {
    return (
      <form>
        <Box>
          <div className="title">
          <h3 className="text-6xl">Sign in</h3>
          <p>
            If you don’t have an account register <br /> You can{" "}
            <Link
              className="font-bold hover:underline transition-all duration-300 text-main"
              to={"/register"}
            >
              Register here
            </Link>
            !
          </p>
          </div>
          <Box className="mb-3">
            <label className="d-block mb-2" htmlFor="email">
              Email
            </label>
            <TextField id="email" label="Outlined" variant="outlined" />
          </Box>
          <Box className="mb-3">
            <label className="d-block mb-2" htmlFor="email">
              Email
            </label>
            <TextField id="email" label="Outlined" variant="outlined" />
          </Box>
          <div className="flex justify-end mt-2">
          <Link
            className="hover:underline transition-all duration-300"
            to={"/forgetPass"}
          >
            Forgot password?
          </Link>
        </div>
        <Button
          type="submit"
          variant="contained"
          className="w-full"
          color="primary"
          sx={{
            mt: 5,
            backgroundColor: "var(--btn-color)",
          }}
        >
          Sign in
        </Button>
        </Box>
      </form>
    );
  };

  return (
    <AuthComponent
      form={form()}
      image={authLogin}
      imgHeader="Sign in to Roamhome"
      imgText="Homes as unique as you."
    />
  );
}

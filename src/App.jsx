import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ToastContainer } from "react-toastify";
import NotFound from "./Modules/Shared/Components/NotFound/NotFound";
import Home from "./Modules/Shared/Components/Home/Home";
import MasterLayout from "./Modules/Shared/Components/MasterLayout/MasterLayout";
import CardFormat from "./Modules/Card/CardFormat";
import ShowAqar from "./Modules/Shared/Components/ShowAqar/ShowAqar";
import Login from "./Modules/Auth/Components/Login/Login";
import AuthLayout from "./Modules/Shared/Components/AuthLayout/AuthLayout";
import Register from "./Modules/Auth/Components/Register/Register";
import ForgetPassword from "./Modules/Auth/Components/ForgetPassword/ForgetPassword";
import ChangePassword from "./Modules/Auth/Components/ChangePassword/ChangePasowrd";
import Verify from "./Modules/Auth/Components/Verify/Verify";
import PartmentData from "./Modules/Shared/Components/Partment/PartmentData";
import LandData from "./Modules/Shared/Components/Land/LandData";
import BuildingData from "./Modules/Shared/Components/Building/BuildingData";
import ProfilePage from "./Modules/Shared/Components/ProfilePage/ProfilePage";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "card", element: <CardFormat /> },
        { path: "showdata", element: <ShowAqar /> },
        { path: "PartmentData", element: <PartmentData /> },
        { path: "LandData", element: <LandData /> },
        { path: "BuildingData", element: <BuildingData /> },
        { path: "/advertiser/profile", element: <ProfilePage /> },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        {path:"login",element:<Login/>},
        {path:"register",element:<Register/>},
        {path:"forget-password",element:<ForgetPassword/>},
        {path:"change-password",element:<ChangePassword/>},
        // {path:"reset-password",element:<ResetPassword/>},
        {path:"verfiy",element:<Verify/>},
      ],
    },
  ]);

  return (
    <>
      <GoogleOAuthProvider clientId="1073694185818-sslphelpovolu9v4mdq8osuer8b3h653.apps.googleusercontent.com">
      <ToastContainer />
      <RouterProvider router={routes} />
    </GoogleOAuthProvider>
    </>
  );
  }

export default App;

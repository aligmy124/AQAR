import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"
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
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element:<MasterLayout/>,
      errorElement: <NotFound />,
      children: [
        {index:true,element:<Home/>},
        {path:"card",element:<CardFormat/>},
        {path:"showdata",element:<ShowAqar/>},
      ],
    },
    {
      path: "/auth",
      element:<AuthLayout/>,
      errorElement: <NotFound />,
      children: [
        {path:"login",element:<Login/>},
        {path:"register",element:<Register/>},
        {path:"forget-password",element:<ForgetPassword/>},
        {path:"change-password",element:<ChangePassword/>},
      ],
    },
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={routes} />
    </>
  );
  }

export default App;

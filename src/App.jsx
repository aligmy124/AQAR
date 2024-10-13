import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"
import { ToastContainer } from "react-toastify";
import NotFound from "./Modules/Shared/Components/NotFound/NotFound";
import Home from "./Modules/Shared/Components/Home/Home";
import MasterLayout from "./Modules/Shared/Components/MasterLayout/MasterLayout";
import CardFormat from "./Modules/Card/CardFormat";
import ShowAqar from "./Modules/Shared/Components/ShowAqar/ShowAqar";
import Login from "./Modules/Auth/Components/Login/Login";
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
        {path:"login",element:<Login/>},
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

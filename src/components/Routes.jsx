import { createBrowserRouter } from "react-router-dom";
import Main from "./Main/Main";
import Home from "./Home/Home";
import Donate from "./Donate/Donate";
import UpdateData from "./Donate/UpdateData";
import Error from "./ErrorPage/Error";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/donate',
            element: <Donate></Donate>
        },
        {
            path: '/updatedonation',
            element: <UpdateData></UpdateData>
        },
        
      ]
    },
  ]);
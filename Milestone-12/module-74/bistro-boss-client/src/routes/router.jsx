import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'menu',
        element: <Menu />
      }
      ,
      {
        path: 'order/:id',
        element: <Order />
      }
      , {
        path: 'login',
        element: <Login />
      }
      , {
        path: 'signup',
        element: <Signup />
      }
    ]
  },
]);
export default router
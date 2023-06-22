import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddToy from "../pages/AddToy/AddToy";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import InitialToyDetails from "../pages/InitialToyDetails/InitialToyDetails";
import Page404 from "../pages/Eror/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/addtoy',
        element: <PrivateRoute> <AddToy /></PrivateRoute>
      },
      {
        path: '/alltoys',
        element: <AllToys />,
        loader:()=>fetch('https://battle-toys-server.vercel.app/totalToys')
      },
      {
        path: '/mytoys',
        element: <PrivateRoute> <MyToys /></PrivateRoute>,
      },
      {
        path: '/toyDetails/:id',
        element: <PrivateRoute> <ToyDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://battle-toys-server.vercel.app/singleToy/${params.id}`)
      },
      {
        path: '/singleInitialToy/:id',
        element: <PrivateRoute> <InitialToyDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://battle-toys-server.vercel.app/singleInitialToy/${params.id}`)
      },
      {
        path: '/updateToys/:id',
        element: <PrivateRoute> <UpdateToy /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://battle-toys-server.vercel.app/singleToy/${params.id}`)
      },


    ]
  }, {
    path: '*',
    element: <Page404 />
  }
]);
export default router
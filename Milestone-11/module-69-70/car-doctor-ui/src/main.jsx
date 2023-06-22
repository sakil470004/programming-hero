import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './pages/Main.jsx';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import AuthProvider from './ContextApi/AuthProvider.jsx';
import Register from './pages/Login/Register.jsx';
import Checkout from './pages/Checkout/Checkout.jsx';
import PrivateRoute from './route/PrivateRoute.jsx';
import MyAppointment from './pages/MyAppointment/MyAppointment.jsx';

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
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/checkout/:id',
        element: <PrivateRoute><Checkout /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/myappointment',
        element: <PrivateRoute><MyAppointment/></PrivateRoute>,
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>,
)

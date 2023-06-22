import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './layout/Main';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';
import Page404 from './pages/Page404';
import Blog from './pages/Blog';
import ChefDetails from './pages/ChefDetails/ChefDetails';
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
        path: '/chef/:id',
        element: <PrivateRoute><ChefDetails /></PrivateRoute>
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
        path: '*',
        element: <Page404 />
      }
    ]
  },
  {
    path: '*',
    element: <Page404 />
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

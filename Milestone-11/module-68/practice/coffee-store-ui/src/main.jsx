import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import AllCoffeList from './pages/AllCoffeList.jsx';
import AddCoffee from './pages/AddCoffee.jsx';
import UpdateCoffee from './pages/UpdateCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: '/',
        loader: () => fetch('http://localhost:5000/coffees'),
        element: <AllCoffeList />
      },
      {
        path: '/update/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
        element: <UpdateCoffee />
      },
      {
        path: '/addcoffee',
        element: <AddCoffee />
      },
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

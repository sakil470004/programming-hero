import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './About';
import Dashboard from './Dashboard';
import Contact from './Contact';
import Home from './Home';
import Friends from './Friends';
import FriendDetails from './FriendDetails';
import DashboardAbout from './DashboardAbout';
import DashboardHome from './DashboardHome';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      // {
      //   path: "/",
      //   element: <DashboardHome />
      // },
      {
        path: 'friends',
        element: <Friends />,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
      },
      {
        path: 'friend/:friendId',
        element: <FriendDetails />,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`),
      },
      {
        path: 'about',
        element: <DashboardAbout />
      }
    ]
  },
  {
    path: "/contact",
    element: <Contact />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

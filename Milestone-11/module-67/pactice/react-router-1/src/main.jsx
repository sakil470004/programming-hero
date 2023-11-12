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
import AddFriend from './AddFriend';
import AllFriends from './AllFriends';
import Update from './Update';

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
    path: "/friend",
    element: <AddFriend />,
  },
  {
    path: "/allfriends",
    element: <AllFriends />,
    loader: () => fetch('http://localhost:5000/users'),
  },  
  {
    path: "/update/:id",
    element: <Update />,
    loader: ({params}) => fetch(`http://localhost:5000/user/${params.id}`),
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

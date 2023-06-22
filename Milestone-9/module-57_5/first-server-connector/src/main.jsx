import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Jobs from './components/Jobs';
import Home from './components/Home';
import Job from './components/Job';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Jobs />,
        loader:()=>fetch('http://localhost:5000/jobs')
      },
      {
        path: "/job/:jobId",
        element: <Job />,
        loader:({params})=>fetch(`http://localhost:5000/job/${params.jobId}`)
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

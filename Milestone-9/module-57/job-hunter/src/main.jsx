import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Layout/Home';
import Statistic from './components/Statistic/Statistic';
import AppliedJob from './components/AppliedJob/AppliedJob';
import Blog from './components/Blog/Blog';
import JobDetails from './components/JobDetails/JobDetails';
import { currentJobLoader,savedJobLoader } from './components/utilities/loaders';
import Page404 from './components/error/Page404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/home',
        element: <App />
      }
      , 
      {
        path: '/statistic',
        element: <Statistic />
      }, 
      {
        path: '/applied',
        element: <AppliedJob />,
        loader:()=>savedJobLoader()
      }, 
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path:'job/:jobId',
        element:<JobDetails/>,
        loader:({params})=>currentJobLoader(params.jobId)
      },
      {
        path:'*',
        element:<Page404/>
      }
    ]
  },
  {
    path:'*',
    element:<Page404/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

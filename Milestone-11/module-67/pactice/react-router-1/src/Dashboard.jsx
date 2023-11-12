import React from 'react';
import DashboardNav from './DashboardNav';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
        <div>
            <DashboardNav/>
        </div>
        <div>
            
          <h1>  Heare is your dashboard staff</h1>
            <Outlet/>
        </div>
        </div>
    );
};

export default Dashboard;
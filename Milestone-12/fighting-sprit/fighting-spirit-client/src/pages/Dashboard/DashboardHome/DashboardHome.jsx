import React from 'react';
import SectionTittle from '../../Shared/SectionTittle';
import { Chart } from './Chat';
const DashboardHome = () => {
    return (
        <div>
            <SectionTittle heading={'Dashboard'} subHeading={'Welcome To Your DashBoard'}></SectionTittle>

            <Chart />
        </div>
    );
};

export default DashboardHome;
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const LineChartS = ({ array }) => {
    return (
        <div>
            <LineChart width={1020} height={600} data={array}>
                <Line type="monotone" dataKey="physics" stroke="#8884d8" />
                <Line type="monotone" dataKey="math" stroke="#8884d8" />
                <Line type="monotone" dataKey="chemistry" stroke="#8884d8" />
                <Line type="monotone" dataKey="bangla" stroke="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            </LineChart>
        </div>
    );
};

export default LineChartS;
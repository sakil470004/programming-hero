import React from 'react';
import { AreaChart, Area, XAxis, YAxis,  Tooltip } from 'recharts';

const Statistic = () => {

    const data = [
        {
            name: 'A1',
            obtainedMark: 59,
            id:1
        },
        {
            name: 'A2',
            obtainedMark: 58,
            id:2
        },
        {
            name: 'A3',
            obtainedMark: 60,
            id:3
        },
        {
            name: 'A4',
            obtainedMark: 53,
            id:4
        },
        {
            name: 'A5',
            obtainedMark: 60,
            id:5
        },
        {
            name: 'A6',
            obtainedMark: 60,
            id:6
        },
        {
            name: 'A7',
            obtainedMark: 60,
            id:7
        },
        {
            name: 'A8',
            obtainedMark: 60,
            id:8
        },

    ];

    return (
        <div className='container-fit'>
           <h1 className='text-center text-5xl'>This is <span className='text-red-400'>Mynul Islam</span> Mark on Programming Hero</h1>
            <div className='flex items-center justify-center mt-40'>
                <AreaChart
                    width={900}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <Area type="monotone" dataKey="obtainedMark" stroke="#9873ff" fill="#9873ff" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </AreaChart>

            </div>
        </div>


    );
};

export default Statistic;

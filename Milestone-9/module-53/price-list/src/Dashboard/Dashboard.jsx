import React from 'react';
import LineChartS from './LineChart';
import RaderCharts from './RaderCharts';
const Dashboard = () => {
    const marksArray = [
        {
            id: 1,
            name: "Student 1",
            physics: 75,
            chemistry: 85,
            math: 90,
            bangla: 20,
        },
        {
            id: 2,
            name: "Student 2",
            physics: 80,
            chemistry: 70,
            math: 95,
            bangla: 25,
        },
        {
            id: 3,
            name: "Student 3",
            physics: 90,
            chemistry: 80,
            math: 75
            , bangla: 10,
        },
        {
            id: 4,
            name: "Student 4",
            physics: 65,
            chemistry: 75,
            math: 85
            , bangla: 30,
        },
        {
            id: 5,
            name: "Student 5",
            physics: 70,
            chemistry: 90,
            math: 80
            , bangla: 25,
        },
        {
            id: 6,
            name: "Student 6",
            physics: 85,
            chemistry: 65,
            math: 70
            , bangla: 40,
        },
        {
            id: 7,
            name: "Student 7",
            physics: 80,
            chemistry: 90,
            math: 85
            , bangla: 35,
        },
        {
            id: 8,
            name: "Student 8",
            physics: 75,
            chemistry: 85,
            math: 90
            , bangla: 20,
        },
        {
            id: 9,
            name: "Student 9",
            physics: 90,
            chemistry: 70,
            math: 80
            , bangla: 30,
        },
        {
            id: 10,
            name: "Student 10",
            physics: 70,
            chemistry: 75,
            math: 95
            , bangla: 45,
        },
        {
            id: 11,
            name: "Student 11",
            physics: 80,
            chemistry: 85,
            math: 65
            , bangla: 25,
        },
        {
            id: 12,
            name: "Student 12",
            physics: 75,
            chemistry: 90,
            math: 70
            , bangla: 45,
        }
    ];

    return (
        <div>
            <LineChartS array={marksArray} />
            <RaderCharts array={marksArray} />
        </div>
    );
};

export default Dashboard;
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const RaderChartContainer = ({array}) => {
    return (
        <RadarChart
        cx={600}
        cy={500}
        outerRadius={150}
        width={1000}
        height={1000}
        data={array}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey='name' />
        <PolarRadiusAxis />
        <Radar
          name="PHYSICS"
          dataKey='physics'
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.4}
        />
            <Radar
          name="Chemistry"
          dataKey='chemistry'
          stroke="#8884d8"
          fill="#1184d8"
          fillOpacity={0.4}
        />
           <Radar
          name="BANGLA"
          dataKey='bangla'
          stroke="#8884d8"
          fill="#1188d8"
          fillOpacity={0.4}
        />
            <Radar
          name="MATH"
          dataKey='math'
          stroke="#8884d8"
          fill="#881100"
          fillOpacity={0.4}
        />
        <Tooltip/>
      </RadarChart>
    );
};

export default RaderChartContainer;
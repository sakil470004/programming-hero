import React, { useState } from 'react';

const Mobile = () => {
    const [battery, setBattery] = useState(100);

    const batteryDown = () => {
        if (battery - 10 >= 0)
            setBattery(battery - 10)
    }
    return (
        <div>
            <h3>This is Mobile</h3>
            <p>{battery}%</p>
            <button onClick={batteryDown}>Battery Down</button>
        </div>
    );
};

export default Mobile;
import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Loading = ({ loading, children }) => {

    if (loading) {
        return <div className='flex items-center h-[600px] justify-center'>
            <progress className="progress w-56"></progress></div>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default Loading;
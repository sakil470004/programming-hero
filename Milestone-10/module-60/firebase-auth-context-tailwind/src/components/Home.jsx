import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Home = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            This is Home
            <p>Hi home</p>
           {user && <p className='text-7xl'>user : {user?.email}</p>}
        </div>
    );
};

export default Home;
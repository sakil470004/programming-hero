import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import SectionTittle from '../../Shared/SectionTittle';
import MyEnrollClassCard from './MyEnrollClassesCard';

const MyEnrollClasses = () => {
    const [details, setDetails] = useState([])

    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://fighting-spirit-server.vercel.app/paymentHistory/${user?.email}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    return (
        <div>
            <SectionTittle heading={'Enrolled Class'} subHeading={'Course You Enrolled'}></SectionTittle>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                details.map(d => <MyEnrollClassCard key={d._id} singleClass={d.curseDetails}>

                </MyEnrollClassCard>)
            }
            </div>
        </div>
    );
};

export default MyEnrollClasses;
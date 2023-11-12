import React, { useContext, useEffect, useState } from 'react';
import SectionTittle from '../../Shared/SectionTittle';
import PaymentHistoryCard from './PaymentHistoryCard';
import { AuthContext } from '../../../providers/AuthProvider';

const PaymentHistory = () => {
    const [details, setDetails] = useState([])
  
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://fighting-spirit-server.vercel.app/paymentHistory/${user?.email}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    // console.log(details)
    return (
        <div>
            <SectionTittle heading={'Payment History'}></SectionTittle>
            <div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                #
                            </label>
                        </th>
                        <th>Transaction Id</th>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Email</th>
                        <th>Status</th>

                    </tr>
                </thead>
                <tbody>
                    {details?.map((det, index) =>
                        <PaymentHistoryCard details={det} key={index} index={index}></PaymentHistoryCard>
                    )
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
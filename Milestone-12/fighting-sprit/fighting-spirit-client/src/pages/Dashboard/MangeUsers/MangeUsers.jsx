import React, { useEffect, useState } from 'react';
import MangeUsersCard from './MangeUsersCard';
import SectionTittle from '../../Shared/SectionTittle';

const MangeUsers = () => {
    const [users, setUsers] = useState([]);
   
    useEffect(() => {
        fetch('https://fighting-spirit-server.vercel.app/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    return (
        <div className="overflow-x-auto">
        <SectionTittle heading={'Manage User Role'}></SectionTittle>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                #
                            </label>
                        </th>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>

                    </tr>
                </thead>
                <tbody>
                    {users?.map((user, index) =>
                        <MangeUsersCard user={user} key={index} index={index}></MangeUsersCard>
                    )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MangeUsers;
import React from 'react';
import { toast } from 'react-hot-toast';

const MangeUsersCard = ({ user, index }) => {
    const handleRoleChange = (e) => {
        const currentRole = e.target.value;
        const editedRole = { role: currentRole }
        fetch(`https://fighting-spirit-server.vercel.app/adminRole/${user._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editedRole)
        })
            .then(res => res.json())
            .then((data) => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Role Updated')
                }
            })
    }
    const roles = ['student', 'instructor', 'admin']
    return (
        <tr >
            <th>
                <label>
                    {index + 1}
                </label>
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={user?.img} alt={user?.name} />
                    </div>
                </div>

            </td>
            <td>
                {user?.name}
            </td><td>
                {user?.email}
            </td>
            <td>

                <select  onChange={handleRoleChange} className="select select-bordered max-w-sm" defaultValue={user?.role}>
                    {roles.map((demoRole, index) =>
                        <option disabled={demoRole === user?.role} value={demoRole} key={index}>{demoRole}</option>
                    )}
                </select>

            </td>
        </tr>
    );
};

export default MangeUsersCard;
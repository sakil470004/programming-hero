import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllFriends = () => {
    const loadedUsers = useLoaderData('http://localhost:5000/users');
    const [users, setUsers] = useState(loadedUsers)

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted')
                    const remainingUser = users.filter(user => user._id !== id)
                    setUsers(remainingUser)
                }
            })
    }
    return (
        <div>
            <h2>Users {users.length}</h2>
            {users.map(user => <p key={user._id}>{user.username} : {user.email} : {user._id}<button onClick={() => handleDelete(user._id)}>x</button> <Link to={`/update/${user._id}`}>update</Link></p>)}
        </div>
    );
};

export default AllFriends;
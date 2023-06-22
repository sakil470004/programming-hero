import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const LoadedUser =useLoaderData();
    const handlePost = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const username = e.target.username.value;
        const user = { username, email }
        fetch(`http://localhost:5000/user/${LoadedUser._id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    alert('Updated')
                    e.target.reset()
                }
                
            })
    }
    return (
        <form onSubmit={handlePost}>
        <input type="email" name="email" placeholder='Email' defaultValue={LoadedUser.email} id="" />
        <br />
        <input type="text" name="username" placeholder='UserName' defaultValue={LoadedUser.username} id="" />
        <br />
        <input type="submit" value="Update Friend" />
    </form>
    );
};

export default Update;
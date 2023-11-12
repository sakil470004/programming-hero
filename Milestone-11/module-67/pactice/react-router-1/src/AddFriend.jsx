import React from 'react';

const AddFriend = () => {
    const handlePost = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const username = e.target.username.value;
        const user = { username, email }
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('inserted')
                    e.target.reset()
                }
            })
    }
    return (
        <form onSubmit={handlePost}>
            <input type="email" name="email" placeholder='Email' id="" />
            <br />
            <input type="text" name="username" placeholder='UserName' id="" />
            <br />
            <input type="submit" value="Add Friend" />
        </form>
    );
};

export default AddFriend;
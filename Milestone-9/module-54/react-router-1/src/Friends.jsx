import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Friends = () => {
    const data = useLoaderData();
    return (
        <div>
            {
                data.map(friend => <div 
                key={friend.id}
                style={{ marginBottom: '2rem', borderBottom: '5px solid gold' }}>
                    <h3>{friend.name}</h3>
                    <p>
                        {friend.email}
                    </p>
                    <Link to={`/dashboard/friend/${friend.id}`}>show more</Link>
                </div>)
}
        </div >
    );
};

export default Friends;
import React from 'react';

const Link = ({route}) => {
    return (
        <li className='ml-4 px-4 py-2'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;
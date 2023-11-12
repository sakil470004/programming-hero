import React from 'react';
import './blog.css'

const Blog = ({blog}) => {
    return (
        <div className='blog'>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
        </div>
    );
};

export default Blog;
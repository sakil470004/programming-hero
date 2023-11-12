import React from 'react';
import './Blog.css'
const Blog = ({blog}) => {

    return (
        <div className='blog'>
        <p className='question'>{blog.question}</p>
        <p className='answer'>{blog.ans}</p>
        </div>
    );
};

export default Blog;
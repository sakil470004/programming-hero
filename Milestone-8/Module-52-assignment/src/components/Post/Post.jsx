import React from 'react';
import './Post.css'
import BsBookmark from './icon';
const Post = (props) => {
    const { coverImage, personImage, readingTime, posted, author, about } = props.post;
    return (
        <div className='post'>
            <img src={coverImage} alt="" />
            <div className='post-info'>
                <div>
                    <img className='icon' width={60} height={60} src={personImage} alt="" />
                    <div className='author-info'>
                        <h4>{author}</h4>
                        <p>{posted}</p>
                    </div>
                </div>
                <p
                onClick={()=>props.handleBookMarks(props.post)}
                >{readingTime} min Read <BsBookmark /></p>

            </div>

            <h2 style={{maxWidth:'90%'}} className='about'>{about}</h2>
            <button 
            onClick={()=>props.handleMarkAsRead(readingTime)}
            style={{fontSize:'20px'}} >Mark as Read</button>
        </div>
    );
};

export default Post;
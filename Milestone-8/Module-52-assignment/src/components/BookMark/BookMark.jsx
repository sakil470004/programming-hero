import React from 'react';
import './BookMark.css'
const BookMark = ({bookMarks}) => {
    return (
        <div className='bookmark'>
            <h1 className='title'>Bookmarked Blogs : {bookMarks.length}</h1>
            {
                bookMarks.map(bookmark=><p
                className='description'
                key={bookmark._id}
                >{bookmark.about}</p>)
            }
        </div>
    );
};

export default BookMark;
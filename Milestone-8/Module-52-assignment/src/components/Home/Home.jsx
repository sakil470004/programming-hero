import React, { useEffect, useState } from 'react';
import './Home.css'
import Post from '../Post/Post';
import BookMark from '../BookMark/BookMark';
import TimeCalculator from '../TimeCalculator/TimeCalculator';
import { Toaster, toast } from 'react-hot-toast';
import Blog from '../Blog/Blog';
const Home = () => {
    const [posts, setPosts] = useState([]);
    const [timeSpend, setTimeSpend] = useState(0);
    const [bookMarks, setBookMarks] = useState([]);
    const  [blogs, setBlogs] = useState([]);

    const handleMarkAsRead = (time) => {
        toast('Good Job! Reading this', {
            icon: '👏',
        });
        setTimeSpend(timeSpend + time);
    }
    const handleBookMarks = (post) => {
        const exits = bookMarks.find(bookMark => bookMark._id === post._id);
        let newBookMarks = []
        if (!exits) {
            newBookMarks = [...bookMarks, post];
            setBookMarks(newBookMarks);
            toast.success("Bookmark added")
        } else {
            toast.error("Bookmark already Exist")
        }
    }

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])

    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            {/* toast */}
            <div><Toaster
                position="top-right"
                reverseOrder={false}
            /></div>

            <div className='home'>

                <div>
                    {
                        posts.map(post => <Post
                            key={post._id}
                            post={post}
                            handleMarkAsRead={handleMarkAsRead}
                            handleBookMarks={handleBookMarks}
                        >{post.author}</Post>)
                    }
                    {
                        blogs.map(blog=><Blog 
                        key={blog.id}
                        blog={blog}></Blog>)
                    }
                </div>
                <div className='sideBar'>
                    {/* here is calculate reading time */}
                    <TimeCalculator timeSpend={timeSpend}></TimeCalculator>

                    <BookMark bookMarks={bookMarks}></BookMark>
                </div>
            </div>
        </div>
    );
};

export default Home;
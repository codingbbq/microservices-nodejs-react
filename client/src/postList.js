import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './commentCreate';
import CommentList from './commentList';

const PostList = () => {

    const [posts, setPosts] = useState({});
    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4002/posts');
        console.log(res.data);
        setPosts(res.data);
    };

    useEffect(() => {
        fetchPosts()
    }, []);

    const renderedPosts = Object.values(posts).map(post => {
        return (
            <div className='card' style={{width: '30%', marginBottom: '20px'}} key={post.id}>
                <div className='card-body'>
                    <h3>{post.title}</h3>
                    <CommentCreate postId={post.id} />
                    <CommentList comments={post.comments || []} />
                </div>
            </div>
        )
    })
    return (
        <>
            <h1>Posts</h1>
            <div className='d-flex flex-row flex-wrap justify-content-between'>
                {renderedPosts}
            </div>
        </>
    )
};

export default PostList;
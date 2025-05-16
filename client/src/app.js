import React from 'react';
import PostCreate from './postCreate';
import PostList from './postList';

const app = () => {
    return (
        <div className='container'>
            <h1>Create Post</h1>
            <PostCreate />
            <hr />
            <PostList />
        </div>
    );
};

export default app;
import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {

    const [content, setContent] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
                content
            });
            setContent('');
        } catch (err) {
            console.error("Error creating comment:", err);
            alert("Failed to create comment. Please try again.");
        }
        setContent('');
    }        

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Comment</label>
                    <input value={content} onChange={e => setContent(e.target.value)} type='text' className='form-control' />
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
};

export default CommentCreate;
import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {

    const [comments, setComments] = useState([]);

    const fetchComments = async (postId) => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
        setComments(res.data);
    }

    useEffect(() => {
        fetchComments(postId);
    }, [postId]);

    const renderComments = comments.map(comment => {
        return (
            <li key={comment.id}>
                {comment.content}
            </li>
        );
    });

    return (
        <ul>
            {renderComments.length > 0 ? renderComments : <li>No comments yet.</li>}
        </ul>
    );
};

export default CommentList;
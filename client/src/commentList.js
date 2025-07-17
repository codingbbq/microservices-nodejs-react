import React from "react";

const CommentList = ({ comments }) => {

    const renderComments = comments.map(comment => {
        
        // Check if the comment status is 'approved' before rendering
        if (comment.status !== 'approved') {
            return null; // Skip rendering for non-approved comments
        }
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
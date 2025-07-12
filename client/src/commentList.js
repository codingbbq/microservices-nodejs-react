import React from "react";

const CommentList = ({ comments }) => {

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
import React from 'react';
import { Link } from 'react-router-dom';


const CommentIndexItem = ( comment ) => {
    debugger
    return (
        <div key={comment.comment.id}>
            <p>{comment.comment.body}</p>
            <p>{comment.comment.author}</p>
        </div>);
};

export default CommentIndexItem;

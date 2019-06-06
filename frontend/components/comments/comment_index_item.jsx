import React from 'react';
import { Link } from 'react-router-dom';


const CommentIndexItem = ( comment ) => {
    debugger
    return (
        <li key={comment.comment.id}>
            {comment.comment.body}
        </li>);
};

export default CommentIndexItem;

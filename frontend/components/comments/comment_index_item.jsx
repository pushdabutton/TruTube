import React from 'react';
import { Link } from 'react-router-dom';


const CommentIndexItem = ( {comment} ) => {
    let photo;
    if (comment.photo) {
        photo = <img src={comment.photo}/>
    }else {
        photo = <i class="fas fa-user-circle"></i>
    }
    return (
        <div className="comment-index-item" key={comment.id}>
            <p>{comment.body}</p>
            <p>{comment.author}</p>
            <p>{photo}</p>
        </div>);
};

export default CommentIndexItem;

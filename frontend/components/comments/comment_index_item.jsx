import React from 'react';
import { Link } from 'react-router-dom';
import randomize from '../../selectors/random_selector'


const CommentIndexItem = ( {comment} ) => {
    let photo;
    if (comment.photo) {
        photo = <img src={comment.photo}/>
    }else {
        photo = <i class="fas fa-user-circle"></i>
    }

    let color1 = "#4285F4"
    let color2 = "#0F9D58"
    let color3 = "#DB4437"
    let color4 = "#F4B400"
    let color5 = "#4285F4"
    let color6 = "#0F9D58"
    let color7 = "#DB4437"
    
    let colors = [color1, color2, color3, color4, color5, color6, color7]
    let proColor = randomize(colors)[0]
    return (
        <>
        <div className="comment-index-item" key={comment.id}>
            <p style={{ color: proColor }}>{photo}</p>
            <div className="comment-body">
                <div>
                    <p className="comment-author">{comment.author}</p>
                </div>
                <br/>
                <p>{comment.body}</p>
            </div>
        </div>
        <br/>
        </>
        );
};

export default CommentIndexItem;

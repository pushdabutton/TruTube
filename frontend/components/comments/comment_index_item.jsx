import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import randomize from '../../selectors/random_selector'
import TimeAgo from 'react-timeago'


const CommentIndexItem = ( {comment, colors, user, likeComment} ) => {
    let photo;
    if (comment.photo) {
        photo = <img src={comment.photo}/>
    }else {
        photo = <i className="fas fa-user-circle"></i>
    }

    const [proColor, setColor] = useState(randomize(colors)[0])
    const [postDate, setpostDate] = useState(comment.created_at)
    // let color1 = "#4285F4"
    // let color2 = "#0F9D58"
    // let color3 = "#DB4437"
    // let color4 = "#F4B400"
    // let color5 = "#4285F4"
    // let color6 = "#0F9D58"
    // let color7 = "#DB4437"
    
    // let colors = [color1, color2, color3, color4, color5, color6, color7]
    // let proColor = randomize(colors)[0]

    function like(){
        // let commentId = comment.id
        if (!user) { return null }
        let like = { likeable_type: "Comment", vote: true, likeable_id: comment.id }
        // if (user.liked_comments.liked.includes(commentId)) {
        //     debugger
        //     likeComment(like)
        // }
        likeComment(like)
    }

    function dislike() {
        if (!user) { return null }
        // let commentId = comment.id
        let like = { likeable_type: "Comment", vote: false, likeable_id: comment.id }
        // if (user.liked_comments.disliked.includes(commentId)) {
        //     likeComment(like)
        // }
        likeComment(like)
    }

    function menuToggle() {
        let menu = document.getElementById(`comment-menu-${comment.id}`)
        menu.classList.toggle("hidden")
        debugger
    }
    
    let likes;
    let dislikes;
    if (comment.totalLikes.likes === 0){
        likes = null
    } else {
        likes = comment.totalLikes.likes
    }

    if (comment.totalLikes.dislikes === 0) {
        dislikes = null
    } else {
        dislikes = comment.totalLikes.dislikes
    }

    

    return (
        <>
        <div className={`comment-index-item`} onMouseEnter={menuToggle} onMouseLeave={menuToggle} key={comment.id} >
            <p style={{ color: proColor }}>{photo}</p>
            <div className="comment-body">
                <div className="comment-details">
                        <div className="comment-header"><p className="comment-author">{comment.author}</p> <p className="comment-date"><TimeAgo date={postDate} /> </p> </div>
                        <div id={`comment-menu-${comment.id}`} className="hidden"><i className="fas fa-ellipsis-h" ></i></div>
                </div>
                <br/>
                <div className="comment-text">{comment.body}</div>
                <br/>
                <div className="comment-like-box">
                    <div className="thumbs">
                        <i className="fas fa-thumbs-up" onClick={like}></i> <span>{likes}</span>
                        <i className="fas fa-thumbs-down" onClick={dislike}></i> <span>{dislikes}</span>
                    </div> 
                    <br />

                </div>
                
            </div>
        </div>
        <br/>
        </>
        );
};

export default CommentIndexItem;

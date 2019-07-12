import * as CommentApiUtil from '../util/comments_api_util'
import * as LikeApiUtil from '../util/like_api_util'

export const RECEIVE_VIDEO_COMMENTS = "RECEIVE_VIDEO_COMMENTS"
export const RECEIVE_VIDEO_COMMENT = "RECEIVE_VIDEO_COMMENT"

export const fetchComments = (video_id) => dispatch => (
    CommentApiUtil.fetchComments(video_id).then(comment => dispatch(receiveVideoComments(comment)))
)

export const receiveVideoComments = comments => {
    return  {      
    type: RECEIVE_VIDEO_COMMENTS,
    comments
    }
};

export const likeComment = (like) => dispatch => (
    LikeApiUtil.createCommentLike(like).then((comment) => dispatch(receiveVideoComment(comment)))
)


export const createComment = (comment) => dispatch => (
    CommentApiUtil.createComment(comment).then(comment => {
        return dispatch(receiveVideoComment(comment))
    })
)

export const receiveVideoComment = comment => {
    return {
        type: RECEIVE_VIDEO_COMMENT,
        comment
    }
};
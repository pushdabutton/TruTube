import * as CommentApiUtil from '../util/comments_api_util'

export const RECEIVE_VIDEO_COMMENTS = "RECEIVE_VIDEO_COMMENTS"

export const fetchComments = (video_id) => dispatch => (
    CommentApiUtil.fetchComments(video_id).then(comment => dispatch(receiveVideoComments(comment)))
)

export const receiveVideoComments = comments => {
    return  {      
    type: RECEIVE_VIDEO_COMMENTS,
    comments
}
};
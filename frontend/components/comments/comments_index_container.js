import { connect } from 'react-redux';
import CommentIndex from './comments_index';
import { fetchComments, createComment, likeComment } from '../../actions/comment_actions';


const msp = (state, ownProps) => {
    return {
        
        comments: Object.keys(state.entities.comments).map(video_id => state.entities.comments[video_id]),
        user: state.entities.users[Object.keys(state.entities.users)[0]],
        ui: state.ui,
        video: state.videos
    }
}

const mdp = dispatch => ({
    fetchComments: (video_id) => dispatch(fetchComments(video_id)),
    createComment: (comment) => dispatch(createComment(comment)),
    likeComment: (like) => dispatch(likeComment(like))
})

export default connect(msp,mdp)(CommentIndex)
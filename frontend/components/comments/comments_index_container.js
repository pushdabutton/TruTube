import { connect } from 'react-redux';
import CommentIndex from './comments_index';
import { fetchComments } from '../../actions/comment_actions';


const msp = (state, ownProps) => {
    return {
        
        comments: Object.keys(state.entities.comments).map(video_id => state.entities.comments[video_id])
    }
}

const mdp = dispatch => ({
    fetchComments: (video_id) => dispatch(fetchComments(video_id))
})

export default connect(msp,mdp)(CommentIndex)
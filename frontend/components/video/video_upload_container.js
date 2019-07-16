import { connect } from 'react-redux'
import VideoUpload from './video_upload'
import { fetchVideo, likeVideo } from '../../actions/video_actions'


const msp = (state, ownProps) => {
    // console.log(ownProps)
    const user = state.entities.users[Object.keys(state.entities.users)[0]]
    return {
        user,
        ui: state.ui
    }
}

const mdp = (dispatch) => ({
    fetchVideo: id => dispatch(fetchVideo(id)),
    likeVideo: like => dispatch(likeVideo(like))

})

export default connect(msp, mdp)(VideoUpload);
import {connect} from 'react-redux'
import VideoShow from './video_show'
import {fetchVideo, likeVideo} from '../../actions/video_actions'


const msp = (state, ownProps) => {
    // console.log(ownProps)
    const Id = parseInt(ownProps.match.params.videoId)
    const video = state.entities.videos[Id]
    const user = state.entities.users[Object.keys(state.entities.users)[0]]
    return {
    video,
    user,
    ui: state.ui
    }
}

const mdp = (dispatch) => ({
    fetchVideo: id => dispatch(fetchVideo(id)),
    likeVideo: like => dispatch(likeVideo(like))

})

export default connect(msp, mdp)(VideoShow);
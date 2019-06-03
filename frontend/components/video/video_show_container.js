import {connect} from 'react-redux'
import VideoShow from './video_show'
import {fetchVideo} from '../../actions/video_actions'


const msp = (state, ownProps) => {
    // console.log(ownProps)
    // const Id = parseInt(ownProps.match.params.videoId)
    const video = Object.values(state.entities.videos)[0]

    return {
    video
    }
}

const mdp = (dispatch) => ({
    fetchVideo: id => dispatch(fetchVideo(id))
})

export default connect(msp, mdp)(VideoShow);
import { connect } from 'react-redux';
import VideoList from './video_list';
import { fetchVideos } from '../../actions/video_actions'

const msp = state => {
    return {
        videos: Object.values(state.entities.videos)
    }
}

const mdp = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos())
})

export default connect(msp, mdp)(VideoList)
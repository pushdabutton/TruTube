import { connect } from 'react-redux';
import VideoList from './video_list';
import { fetchVideos } from '../../actions/video_actions'
import {withRouter} from 'react-router-dom'

const msp = state => {
    return {
        videos: Object.values(state.entities.videos),
        ui: state.ui
    }
}

const mdp = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos())
})

export default withRouter(connect(msp, mdp)(VideoList))
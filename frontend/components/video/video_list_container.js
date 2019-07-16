import { connect } from 'react-redux';
import VideoList from './video_list';
import { fetchVideos } from '../../actions/video_actions'
import {withRouter} from 'react-router-dom'
import randomize from '../../selectors/random_selector'

const msp = state => {
    return {
        videos: randomize(Object.values(state.entities.videos)),
        ui: state.ui
    }
}

const mdp = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos())
})

export default withRouter(connect(msp, mdp)(VideoList))
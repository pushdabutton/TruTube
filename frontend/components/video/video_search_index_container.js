import { connect } from 'react-redux';
import VideoSearchIndex from './video_search_index';
import { fetchVideos, searchVideos } from '../../actions/video_actions'
import Randomize from '../../selectors/random_selector'
import {withRouter} from 'react-router-dom'

const msp = state => {

    return {
        videos: Object.values(state.entities.videos)
    }
}

const mdp = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
    searchVideos: (query) => dispatch(searchVideos(query))
})

export default withRouter(connect(msp, mdp)(VideoSearchIndex))
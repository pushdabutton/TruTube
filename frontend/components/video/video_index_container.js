import {connect } from 'react-redux';
import VideoIndex from './video_index';
import {fetchVideos} from '../../actions/video_actions'
import Randomize from '../../selectors/random_selector'

const msp = state =>{
   return {
    videos: Randomize(Object.values(state.entities.videos)),
    ui: state.ui
    }
}   

const mdp = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos())
    
})

export default connect(msp, mdp)(VideoIndex)
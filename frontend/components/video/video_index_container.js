import {connect } from 'react-redux';
import VideoIndex from './video_index';
import {fetchVideos} from '../../actions/video_actions'
import Randomize from '../../selectors/random_selector'

const msp = state =>{
    debugger
   return {
    videos: Randomize(Object.values(state.entities.videos))
    }
}   

const mdp = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos())
    
})

export default connect(msp, mdp)(VideoIndex)
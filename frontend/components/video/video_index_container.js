import {connect } from 'react-redux';
import VideoIndex from './video_index';
import {fetchVideos} from '../../actions/video_actions'

const msp = state =>{
   return {
    videos: Object.keys(state.entities.videos).map(id => state.entities.videos[id])
    }
}   

const mdp = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos())
})

export default connect(msp, mdp)(VideoIndex)
import { RECEIVE_VIDEO, RECEIVE_VIDEOS } from '../actions/video_actions';
import {merge} from 'lodash'

export const VideosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type){
    
        case RECEIVE_VIDEOS:
            return action.videos;
        
        case RECEIVE_VIDEO:
            // debugger
            return merge({}, oldState, {[action.video.id]: action.video})
            // return {[action.video.id]: action.video}
       
        default:
            return oldState;
    }
};
import { RECEIVE_VIDEO } from '../actions/video_actions';
import merge from 'lodash'

export const VideosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    // console.log(action.video.id)
    switch(action.type){
        
        case RECEIVE_VIDEO:
            // debugger
            // return merge({}, oldState, {[action.video.id]: action.video})
            return {[action.video.id]: action.video}
       
        default:
            return oldState;
    }
};
import { RECEIVE_VIDEO_COMMENTS } from '../actions/comment_actions'

import {merge} from 'lodash'
console.log(RECEIVE_VIDEO_COMMENTS == "RECEIVE_VIDEO_COMMENTS")
const CommentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {

        case RECEIVE_VIDEO_COMMENTS:
            return action.comments

        default:
            return oldState;
    }
};

export default CommentsReducer;
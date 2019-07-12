import { RECEIVE_VIDEO_COMMENTS, RECEIVE_VIDEO_COMMENT } from '../actions/comment_actions'

import {merge} from 'lodash'

const CommentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {

        case RECEIVE_VIDEO_COMMENTS:
            return action.comments;

        case RECEIVE_VIDEO_COMMENT:
            let mergeState = merge({}, oldState, { [action.comment.id]: action.comment })
            return mergeState

        default:
            return oldState;
    }
};

export default CommentsReducer;
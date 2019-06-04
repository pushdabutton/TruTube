import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';

export default (oldState = [], action) => {
    Object.freeze(oldState);
    switch(action.type){

        case RECEIVE_SESSION_ERRORS:
            // if (action.errors == undefined){
            //     return ["Email/Username already in use"]
            // }else{
                return action.errors;
            // }
        case RECEIVE_CURRENT_USER:
            return [];

        case CLEAR_ERRORS:
            return [];

        default:
            return oldState;
    }
};
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from "../actions/session_actions"




const sessionReducer = (oldState = {}, action) => {
    const nullUser = {
        id: null
    }
    console.log(LOGOUT_CURRENT_USER === "LOGOUT_CURRENT_USER")
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.user.id };
        
        case LOGOUT_CURRENT_USER:
            return nullUser;


            
        default:
            debugger
            return oldState
    }
}

export default sessionReducer;
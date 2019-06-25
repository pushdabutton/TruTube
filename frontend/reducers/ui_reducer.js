import merge from 'lodash/merge'

import { DARKMODE } from "../actions/ui_actions"


const uiReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case DARKMODE:
            return {darkmode: !action.darkmode}
        default:
            return oldState;
    }
}

export default uiReducer;

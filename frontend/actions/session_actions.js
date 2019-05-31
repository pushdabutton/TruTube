import * as SessionApiUtil from "../util/session_api_util"


export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const CLEAR_ERRORS = "CLEAR_ERRORS"

export const sign_up = (user) => dispatch => (
    SessionApiUtil.signup(user).then( user => dispatch(receiveCurrentUser(user)), 
    errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const log_in = (user) => dispatch => (
    SessionApiUtil.log_in(user).then( user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
    
)

export const log_out = () => dispatch => (
    SessionApiUtil.log_out().then( () => dispatch(logoutCurrentUser()),
    errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS,
    errors: []
})
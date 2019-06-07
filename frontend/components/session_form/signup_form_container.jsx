import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { sign_up, clearErrors, log_in } from '../../actions/session_actions';
import SessionForm from './session_form';


const msp = ({errors}) => {
    return {
        errors: errors.session,
        formType: 'signup',
        navLink: <Link to="/login">Log In</Link>
    };
};

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(sign_up(user)),
        clearErrors: () => dispatch(clearErrors()),
        log_in: (user) => dispatch(log_in(user))
    };
};

export default connect(msp, mdp)(SessionForm)

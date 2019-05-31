import { connect } from 'react-redux';
import React from 'react'
import { Link } from 'react-router-dom';
import { log_in, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = ({errors}) => {

    return {
        errors: errors.session,
        formType: 'login',
        navLink: <Link to="/signup">Sign Up</Link>
    };
};

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(log_in(user)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(msp, mdp)(SessionForm);
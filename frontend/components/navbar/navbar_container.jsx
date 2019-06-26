import { connect } from 'react-redux';
import { log_out } from '../../actions/session_actions';
import Navbar from './navbar';
import {withRouter} from 'react-router-dom'
import { changeDarkMode } from '../../actions/ui_actions'

const mapStateToProps = ({ session, entities: { users }, ui }) => {
    return {
        user: users[session.id],
        ui

    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(log_out()),
    changeDarkMode: (bool) => dispatch(changeDarkMode(bool))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
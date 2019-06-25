import { connect } from 'react-redux';
import { log_out } from '../../actions/session_actions';
import Navbar from './navbar';
import {withRouter} from 'react-router-dom'
import { changeDarkMode } from '../../actions/ui_actions'

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        user: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(log_out()),
    changeDarkMode: () => dispatch(changeDarkMode())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
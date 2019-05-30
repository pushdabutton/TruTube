import { connect } from 'react-redux';
import { log_out } from '../../actions/session_actions';
import Navbar from './navbar';


const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        user: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(log_out())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);
import React from 'react';
import { withRouter } from 'react-router-dom';
import {merge} from 'lodash'

class SessionForm extends React.Component {
    constructor(props){
        super(props);        
        this.state = { email: "", password: ""}

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault();
        let user = merge({},this.state);
        this.props.processForm(user);
        this.props.history.push(`/`)
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={idx}>
                        {error}
                    </li>
                ))}

            </ul>
        )
    }

    render() {
        return(
            <div className="login-form-container">
                <form className="login-form-box" onSubmit={this.handleSubmit}>
                    Troogle
                    <br/>
                    {this.props.formType}
                    <div className="login-form">
                        <br/>

                        <label>Email
                            <input type="text" value={this.state.email} onChange={this.update("email")} className='login-input-email'/>
                        </label>
                            {this.renderErrors()}
                        <br/>

                        <label>Password
                            <input type="password" value={this.state.password} onChange={this.update('password')} className='login-input-email'/>
                        </label>
                        <br/>

                        <input type="submit" value={this.props.formType} className='session-submit'/>

                    </div>
                </form>
            </div>
        )

    }

}

export default withRouter(SessionForm)
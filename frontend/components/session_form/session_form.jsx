import React from 'react';
import { withRouter } from 'react-router-dom';
import {merge} from 'lodash'
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props){
        super(props);        
        this.state = { email: "", password: "", username: ""}

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault();
        let user = merge({},this.state);
        this.props.processForm(user);
        if (this.state.user){
        this.props.history.push(`/`)
        }
    }

    renderErrors(field) {

        return (
            <ul>
                {this.props.errors.map((error,idx) => (
                    <li key={idx} className="errors">
                        {error.includes(field) ? error : null}
                    </li>
                ))}

            </ul>
        )
    }

    

    render() {
        let usernameInput = this.props.formType == "signup" ?
            <label className="login-form-label">
                <input type="text" value={this.state.username} onChange={this.update("username")} className='login-input' placeholder="Username" />
                {this.renderErrors("Username")}
                {/* <br /> */}
            </label>
             : null;
        
        let signUpButton = this.props.formType == "login" ? 
            <div className="signup-button">
                <Link to="/signup">Create account</Link>
            </div> : 
            <div className="signup-button">
                <Link to="/login">Sign in instead</Link>
            </div>;

        let formWords = this.props.formType == "login" ? 
            <div className="entry-text">
                Sign in
            </div> : 
            <div className="entry-text">
                Create your Account
            </div>;

        let troogle = 
            <div className="troogle-logo"> 
                <span className="T" style={{color:"#4285F4"}}>T</span>
                <span className="r" style={{color:"#0F9D58"}}>r</span> 
                <span className="o" style={{color:"#DB4437"}}>o</span> 
                <span className="o" style={{color:"#F4B400"}}>o</span> 
                <span className="g" style={{color:"#4285F4"}}>g</span> 
                <span className="l" style={{color:"#0F9D58"}}>l</span> 
                <span className="e" style={{color:"#DB4437"}}>e</span> 
            </div>
        return(
            <div className="login-form-container">
                
                <form className="login-form-box" onSubmit={this.handleSubmit}>
                    <div className="troogle-box">  
                        {troogle}
                        <br/>
                        {formWords}
                        <br/>
                        <span className="continue-text">to continue to TruTube</span>
                        <div className="login-form">
                            <br/>

                            <label className="login-form-label">
                                <input type="email" value={this.state.email} onChange={this.update("email")} className='login-input' placeholder="Email"/>
                            </label>
                                
                                {this.renderErrors("Email")}
                            <br/>
                            {usernameInput}
                            <br/>
                            <label className="login-form-label">
                                <input type="password" value={this.state.password} onChange={this.update('password')} className='login-input' placeholder="Password"/>
                            </label >
                                {this.renderErrors("Password")}
                            <br/>

                            <input type="submit" value="Next" className='session-submit'/>
                        </div>
                        <br/>
                        {signUpButton}
                        <br/>
                    </div>
                </form>

                
            </div>
        )

    }

}

export default withRouter(SessionForm)
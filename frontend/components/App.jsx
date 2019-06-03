import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import {Route, Switch} from "react-router-dom"
import NavbarContainer from "../components/navbar/navbar_container"
import {AuthRoute} from "../util/route_util";
import VideoShowContainer from './video/video_show_container'

const App = () => (
    //switch router
    <div>
        <Switch>
            
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <header>
                <NavbarContainer />
                <Route path="/videos/:videoId" component={VideoShowContainer} />
            </header>
            
        </Switch>
    </div>
);

export default App;
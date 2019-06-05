import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import {Route, Switch} from "react-router-dom"
import NavbarContainer from "../components/navbar/navbar_container"
import {AuthRoute} from "../util/route_util";
import VideoShowContainer from './video/video_show_container'
import VideoIndexContainer from './video/video_index_container';

const App = () => (
    //switch router
    <>
        <Switch>            
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            {/* <header> */}
            {/* </header> */}
            <NavbarContainer />
            
        </Switch>
            <Route path="/videos/:videoId" component={VideoShowContainer} />
            <Route exact path="/" component={VideoIndexContainer} />
    </>
);

export default App;
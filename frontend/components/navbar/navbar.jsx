import React from 'react';
import {Link} from 'react-router-dom'
import randomize from '../../selectors/random_selector'


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {query: "", 
            user: this.props.user, 
            logout: this.props.logout,
            mode: "light"
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        let color1 = "#4285F4"
        let color2 = "#0F9D58"
        let color3 = "#DB4437"
        let color4 = "#F4B400"
        let color5 = "#4285F4"
        let color6 = "#0F9D58"
        let color7 = "#DB4437"

        let colors = [color1, color2, color3, color4, color5, color6, color7]
        this.proColor = randomize(colors)[0]
        this.switchDarkmode = this.switchDarkmode.bind(this)
    }

    componentDidMount(){
        // if (this.props.darkmode){
        //     this.setState({ mode: "dark" })
        // }else{
        //     this.setState({ mode: "light" })
        // }

    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.history.push(`/videos/search?query=${this.state.query}`)
    }

    switchDarkmode(){
        this.props.changeDarkMode(this.props.ui.darkmode)
        // debugger
        // if (!this.props.ui.darkmode) {
        //     this.setState({ mode: "dark" })
        // } else {
        //     this.setState({ mode: "light" })
        // }
    }

    toggleHidden(e){
        let modal = document.getElementById("Modal")
        modal.classList.toggle("hidden")
    }




    render(){

        let mode = this.props.ui.darkmode ? 'dark' : 'light'
        let pic;
        if(this.props.user) {
            if (this.props.user.picture) {
                pic = <img src={this.props.user.picture} onClick={this.toggleHidden}/>
            } else {
                pic = <i className="fas fa-user-circle" style={{ color: this.proColor }} onClick={this.toggleHidden}></i>
            }
        }


        const display = this.props.user ? (
            <div>
                    {pic}
                    {/* <Link onClick={this.props.logout} className="signout-button">Sign Out</Link> */}
                <div className={`${mode}-modal hidden`} id="Modal" >
                        <div className="modal-details">{pic} {this.props.user.username}</div>
                        <br/>
                        <div onClick={this.props.logout} className="signout-button">Sign Out</div>
                        <br />
                        <div onClick={this.switchDarkmode} className="dark-moode-button">Dark Mode</div>
                    </div>
            </div>
        ) : (
                <div>
            <Link to="/login" className={`${mode}-nav-login`}>
                <i className="fas fa-user"></i>
                Sign In
            </Link>
                </div>
        )
        const navLink = () => (
            <>
                <div className={`${mode}-navbar`}>
                {/* <div className="nav-div"> */}
                    <div className="nav-leftside">
                        <h1 ><i className="fas fa-align-justify"></i></h1>
                        <Link to="/" className={`${mode}-nav-home`}>
                            <h3>Verbal WarZone</h3>
                        </Link>
                    </div >
                    <form className="search" onSubmit={this.handleSubmit}>
                        <input type="text" className={`${mode}-searchBar`}
                            placeholder="Search" value={this.state.query} onChange={this.update("query")}/>
                        <button type="submit" className={`${mode}-searchIcon`} value="search"><i className="fas fa-search"></i></button>

                    </form>
                    <div className="nav-rightside">
                        <Link to="/upload"> <i className="fas fa-video"></i> </Link>
                        <i className="fas fa-th"></i>
                        <i className="fas fa-ellipsis-v"></i>
                        {display}
                        
                    </div>
                {/* </div> */}
            </div>

            </>
        )

        
        return navLink()
    };
}

export default Navbar;
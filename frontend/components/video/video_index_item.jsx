import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class VideoIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.play = this.play.bind(this)
        this.pause = this.pause.bind(this)

    }
    
    redirect (id){
       return () => {this.props.history.push(`/videos/${id}`)}
    }

    play(e) {
        debugger
        // this.player = document.getElementById(`mini-video-${this.props.video.id}`)
        let player = e.currentTarget
        // this.player.muted = true
        player.muted = true
        if (player.paused) {

            player.play();

        } 
    }

    pause(e) {
    
        let player = e.currentTarget
        player.muted = true
        if (!player.paused) {
            player.pause();
            player.load();
        }
    }


    render(){
        if(!this.props.video) {return null}
        // let mode = this.props.ui.darkmode ? 'dark' : 'light'
        return (
            // <div className={`${mode}-vid-holder`} onClick={this.redirect(this.props.video.id)}> 
                <video src={this.props.video.photoUrl} className="mini-video-box" id={`mini-video-${this.props.video.id}`} onMouseEnter={this.play} onMouseLeave={this.pause} muted preload="auto"> 
                    <i className="fab fa-youtube video"></i>
                </video>
                /* <p>{this.props.video.title}</p>
                <div className="mini-video-user">{this.props.video.username}</div>
                <div className="mini-video-info"><span className="mini-views">{this.props.video.views || 0} views</span>&nbsp;•&nbsp;<span className="mini-views">{this.props.video.published}</span></div> */
            // </div>
        )
    }
}


export default withRouter(VideoIndexItem);
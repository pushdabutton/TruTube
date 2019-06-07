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

    play() {
        debugger
        this.player = document.getElementById(`mini-video-${this.props.video.id}`)
        this.player.muted = true
        if (this.player.paused) {

            this.player.play();

        } 
    }

    pause() {
        debugger
        this.player = document.getElementById(`mini-video-${this.props.video.id}`)
        this.player.muted = true
        if (!this.player.paused) {
            this.player.pause();
        }
    }


    render(){
        if(!this.props.video) {return null}
        return (
            <div className="vid-holder" onClick={this.redirect(this.props.video.id)}> 
                <video src={this.props.video.photoUrl} className="mini-video-box" id={`mini-video-${this.props.video.id}`} onMouseEnter={this.play} onMouseLeave={this.pause} defaultMuted> 
                    <i className="fab fa-youtube video"></i>
                </video>
                <p>{this.props.video.title}</p>
                <span className="mini-views">{this.props.video.views || 0} views</span>
            </div>
        )
    }
}


export default withRouter(VideoIndexItem);
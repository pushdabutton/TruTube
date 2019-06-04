import React from 'react';
import { Link } from 'react-router-dom'

class VideoShow extends React.Component {
    constructor(props) {
        super(props)
        // debugger
        this.playPause = this.playPause.bind(this)
        this.vidSeek = this.vidSeek.bind(this)
        this.seekTimeUpdate = this.seekTimeUpdate.bind(this)
        this.vidMute = this.vidMute.bind(this)
        this.setVol = this.setVol.bind(this)
        this.volUpdate = this.volUpdate.bind(this)
    }

    componentDidMount() {
        
        let id = parseInt(this.props.match.params.videoId)
        this.props.fetchVideo(id)
        this.player = document.getElementById("video-player")
        this.seekSlider = document.getElementById("seekSlider")
        
        
    }

    //--------------Player Controls-----------------------------------------------------------

    playPause(e){
        // debugger
        this.player = document.getElementById("video-player")
        if(this.player.paused){
            
            this.player.play();
            e.currentTarget.innerHTML = "Pause";
        }else{
            this.player.pause();
            e.currentTarget.innerHTML = "Play";
        }
    }

    vidSeek(){
        // debugger
        this.player = document.getElementById("video-player")
        this.seekSlider = document.getElementById("seekSlider")
        let seekto = this.player.duration * (this.seekSlider.value / 100)
        this.player.currentTime = seekto;
    }

    seekTimeUpdate() {
        debugger
        this.player = document.getElementById("video-player")
        this.seekSlider = document.getElementById("seekSlider")
        this.curtimetext = document.getElementById("curtimetext")
        this.durtimetext = document.getElementById("durtimetext")
        let newTime = this.player.currentTime * (100 / this.player.duration)
        this.seekSlider.value = newTime;
        let curmins = Math.floor(this.player.currentTime / 60 )
        let cursecs = Math.floor(this.player.currentTime - curmins * 60)
        let durmins = Math.floor(this.player.duration / 60)
        let dursecs = Math.round(this.player.duration - durmins * 60)
        if(cursecs < 10) {cursecs = "0"+cursecs}
        if(dursecs < 10) {dursecs = "0"+dursecs}
        this.curtimetext.innerHTML = curmins+":"+cursecs
        this.durtimetext.innerHTML = durmins+":"+dursecs
    }

    vidMute() {
        this.mutebtn = document.getElementById("mutebtn")
        this.player = document.getElementById("video-player")
        if (this.player.muted) {

            this.player.muted = false;
            this.mutebtn.innerHTML = "Mute";
        } else {
            this.player.muted = true;
            this.mutebtn.innerHTML = "Unmute";
        }
    }

    setVol(){
        this.player = document.getElementById("video-player")
        this.volSlider = document.getElementById("volSlider")
        this.player.volume = this.volSlider.value / 100;
        
    }

    volUpdate(){
        this.player = document.getElementById("video-player")
        this.volSlider.value = this.player.volume * 100
    }



    //------------------------------------------------------------------------------------------

    render() {
        debugger
        const { video } = this.props;
        if (!video) {
            let url = null
            return (<video src={url} id="video-player"
                         width="720" height="480" >
                    </video>)

        }
        // debugger
        let url = this.props.video.photoUrl
        return (
        <div className="video-page">
                
            <div className="video-box">
                    <video src={url} id="video-player" onTimeUpdate={this.seekTimeUpdate} onVolumeChange={this.volUpdate}
                    width="720" height="480" >
                </video>
                <div className="video-controls">
                    <button className="play-pause" onClick={this.playPause} >Play</button>
                    <input id="seekSlider" onChange={this.vidSeek} type="range" min="0" max="100" value="0" step="1" />
                    <span id="curtimetext">00:00</span> / <span id="durtimetext">00:00</span>
                    <button id="mutebtn" onClick={this.vidMute}>Mute</button>
                    <input id="volSlider" onChange={this.setVol} type="range" min="0" max="100" value="100" step="1" />
                </div>
            </div>
            <div className="video-details">
                <h2 className="video-title">{this.props.video.title}</h2>
                <h3>{this.props.video.views} Views</h3>
                <h2>{this.props.video.description}</h2>
            </div>
        </div>
        );
    }


}

export default VideoShow;

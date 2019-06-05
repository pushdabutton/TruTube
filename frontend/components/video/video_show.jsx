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
            e.currentTarget.classList.add("fa-pause")
            e.currentTarget.classList.remove("fa-play")
        }else{
            this.player.pause();
            e.currentTarget.classList.add("fa-play")
            e.currentTarget.classList.remove("fa-pause")
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
        if (!newTime) { newTime = 0}
        this.seekSlider.value = newTime;
        let curmins = Math.floor(this.player.currentTime / 60 )
        let cursecs = Math.floor(this.player.currentTime - curmins * 60)
        let durmins = Math.floor(this.player.duration / 60)
        let dursecs = Math.round(this.player.duration - durmins * 60)
        if (!durmins) { durmins = "0" }
        if (!dursecs) { dursecs = "0" }

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
            this.mutebtn.classList.remove("fa-volume-mute")
            this.mutebtn.classList.add("fa-volume-up")
        } else {
            this.player.muted = true;
            this.mutebtn.classList.remove("fa-volume-up")
            this.mutebtn.classList.add("fa-volume-mute")
        }
    }

    setVol(){
        debugger
        this.player = document.getElementById("video-player")
        this.volSlider = document.getElementById("volSlider")
        this.player.volume = this.volSlider.value / 100;
        
    }

    volUpdate(){
        this.player = document.getElementById("video-player")
        this.volSlider = document.getElementById("volSlider")
        this.volSlider.value = this.player.volume * 100
    }





    render() {
        const { video } = this.props;
        if (!video) {
            let url = null
            return (<video src={url} id="video-player"
                         width="720" height="480" >
                    </video>)

        }
        // debugger
        let url = this.props.video.photoUrl

        // let vol = this.player.volume * 100
        return (
        <div className="video-page">
                
            <div className="video-box">
                    <video src={url} id="video-player" onTimeUpdate={this.seekTimeUpdate} onVolumeChange={this.volUpdate}
                    width="720" height="480" >
                </video>
                <div className="seek"><input id="seekSlider" onChange={this.vidSeek} type="range" min="0" max="100" value="0" step="1" style={{ width: "720px" }}/></div>
                <div className="video-controls">
                    <div className="player-left-side"><i className="fas fa-play" id="play-pause" onClick={this.playPause} ></i>
                    <div className="time"><span id="curtimetext">0:00</span> / <span id="durtimetext">0:00</span></div>
                        <div>
                            <i className="fas fa-volume-up" id="mutebtn" onClick={this.vidMute}></i>
                            <input id="volSlider" onChange={this.setVol} type="range" min="0" max="100" value="100" step="0.01" />
                        </div>
                    </div>
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

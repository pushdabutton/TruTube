import React from 'react';
import { Link } from 'react-router-dom'
import VideoListContainer from '../video/video_list_container'
import CommentsIndexContainer from '../comments/comments_index_container'
import randomize from '../../selectors/random_selector'

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
        this.player = React.createRef();
        this.like = this.like.bind(this)
        this.dislike = this.dislike.bind(this)
        this.vidplayPause = this.vidplayPause.bind(this)
        this.fullScreen = this.fullScreen.bind(this)
        this.state = {
            currentSec: 0,
            vol: 100
        }
        let color1 = "#4285F4"
        let color2 = "#0F9D58"
        let color3 = "#DB4437"
        let color4 = "#F4B400"
        let color5 = "#4285F4"
        let color6 = "#0F9D58"
        let color7 = "#DB4437"

        this.colors = [color1, color2, color3, color4, color5, color6, color7]
        this.proColor = randomize(this.colors)[0]

    }

    componentDidMount() {
        
        let id = parseInt(this.props.match.params.videoId)
        this.props.fetchVideo(id)
        this.player = document.getElementById("video-player")
        this.seekSlider = document.getElementById("seekSlider")
            
    }

    componentDidUpdate(){

    }

    like(){
        if(!this.props.user) {return null}
        let vidId = this.props.match.params.videoId
        if(this.props.user.liked_videos.liked.includes(vidId)){
            this.props.likeVideo(like)
        }
        let like = { likeable_type: "Video", vote: true, likeable_id: this.props.match.params.videoId}
        this.props.likeVideo(like)
    }

    dislike() {
        if (!this.props.user) { return null }
        let vidId = this.props.match.params.videoId
        if (this.props.user.liked_videos.disliked.includes(vidId)) {
            this.props.likeVideo(like)
        }
        let like = { likeable_type: "Video", vote: false, likeable_id: this.props.match.params.videoId }
        this.props.likeVideo(like)
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

    vidplayPause(e) {
        // debugger
        this.player = document.getElementById("video-player")
        this.playButton = document.getElementById("play-pause")
        if (this.player.paused) {

            this.player.play();
            this.playButton.classList.add("fa-pause")
            this.playButton.classList.remove("fa-play")
        } else {
            this.player.pause();
            this.playButton.classList.add("fa-play")
            this.playButton.classList.remove("fa-pause")
        }
    }

    // vidSeek(){
    //     // debugger
    //     this.player = document.getElementById("video-player")
    //     this.seekSlider = document.getElementById("seekSlider")
    //     let seekto = this.player.duration * (this.seekSlider.value / 100)
    //     this.player.currentTime = seekto;
    // }

    vidSeek(e) {
        this.setState({ currentSec: e.target.value / 100 });
        this.player.currentTime = e.target.value / 100;
    }

    seekTimeUpdate() {
        this.player = document.getElementById("video-player")
        this.seekSlider = document.getElementById("seekSlider")
        this.curtimetext = document.getElementById("curtimetext")
        this.durtimetext = document.getElementById("durtimetext")
        this.playButton = document.getElementById("play-pause")

        setInterval(() => {
            this.setState({ currentSec: this.player.currentTime })
        })
        // let newTime = this.player.currentTime * (100 / this.player.duration)
        // if (!newTime) { newTime = 0}
        // this.seekSlider.value = newTime;
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
        
        if(this.player.currentTime === this.player.duration){
            this.playButton.classList.add("fa-play")
            this.playButton.classList.remove("fa-pause")
        }

        // if (this.player.paused) {
        //     this.playButton.classList.add("fa-pause")
        //     this.playButton.classList.remove("fa-play")
        // } 
        // if(!this.player.paused) {
        //     this.playButton.classList.remove("fa-pause")
        //     this.playButton.classList.add("fa-play")
        // }
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

        this.player = document.getElementById("video-player")
        this.volSlider = document.getElementById("volSlider")
        this.player.volume = this.volSlider.value / 100;
        
    }

    volUpdate(){
        this.player = document.getElementById("video-player")
        this.volSlider = document.getElementById("volSlider")
        this.volSlider.value = this.player.volume * 100
        this.setState({vol: this.player.volume * 100})
    }

    fullScreen(){
        this.player = document.getElementById("video-player")
        if (this.player.requestFullscreen) {
            this.player.requestFullscreen();
        } else if (this.player.mozRequestFullScreen) { /* Firefox */
            this.player.mozRequestFullScreen();
        } else if (this.player.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            this.player.webkitRequestFullscreen();
        } else if (this.player.msRequestFullscreen) { /* IE/Edge */
            this.player.msRequestFullscreen();
        }

    }


    



    render() {
        const { video } = this.props;
        let mode = this.props.ui.darkmode ? 'dark' : 'light'
        if (!video) {
            let url = null
            return (<video src={url} id="video-player"
            width="720" height="480" >
                    </video>)

        }
        let timeStyle = {
            background: `linear-gradient( to right, red 0%, red ${this.player.currentTime/ this.player.duration * 100}%, #7c7c7c ${this.player.currentTime / this.player.duration * 100}% , #7c7c7c ${Math.floor(this.player.currentTime / this.player.duration * 100)}%)`
        }

        // let timeStyle = {
        //     background: `linear-gradient( to right, red 0%, red ${this.player.currentTime * 10}%, #7c7c7c ${this.player.currentTime * 10}% , #7c7c7c ${Math.floor(this.player.currentTime / this.player.duration * 100)}%)`
        // }
        let url = this.props.video.photoUrl
        let photo;
        if (this.props.photo) {
            photo = <img src={this.props.photo} />
        } else {
            photo = <i className="fas fa-user-circle" ></i>
        }

        let likePerc = (this.props.video.totalLikes.likes / (this.props.video.totalLikes.likes + this.props.video.totalLikes.dislikes)) * 100
        if (!likePerc) { likePerc = 0}
        likePerc += "%"
        debugger
        // let vol = this.player.volume * 100
        return (
            <div className={`${mode}-show-page`}>
            <div className="whole-page">
                <div className="video-page">
                        
                    <div className="video-box" >
                            <video src={url} id="video-player" onTimeUpdate={this.seekTimeUpdate} onVolumeChange={this.volUpdate} 
                            width="100%" height="auto" onClick={this.vidplayPause}>
                        </video>
                            <input id="seekSlider" className="seek" onChange={this.vidSeek} type="range" min="0" max={this.player.duration * 100} value={this.state.currentSec * 100} step="1" style={{ width: "100%" }} style={timeStyle}/>
                        <div className="video-controls">
                            <div className="player-left-side"><i className="fas fa-play" id="play-pause" onClick={this.playPause} ></i>
                                    <i className="fas fa-volume-up" id="mutebtn" onClick={this.vidMute}></i>
                                    <input id="volSlider" className="volume" onChange={this.setVol} type="range" min="0" max="100" value={this.state.vol} step="0.01" />
                                    <div className="time"><span id="curtimetext">0:00</span> / <span id="durtimetext">0:00</span></div>
                            </div>
                            <div className="player-right-side">
                                <i class="fas fa-expand" onClick={this.fullScreen}></i>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="video-details">
                    <h2 className={`${mode}-video-title`}>{this.props.video.title}</h2>
                    <div className="views-likes">
                        <h3 className="video-views">{this.props.video.views || 0} Views</h3>
                        <div className="video-like-box">
                            <div className="thumbs">
                                <i className="fas fa-thumbs-up" onClick={this.like}></i> <span>{this.props.video.totalLikes.likes}</span>
                                <i className="fas fa-thumbs-down" onClick={this.dislike}></i> <span>{this.props.video.totalLikes.dislikes}</span>
                            </div>
                            <br/>
                            <div className="likes-container">
                                <div className="like-bar" style={{width: likePerc}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${mode}-video-description`}>
                    <div className="profile-pic" style={{ color: this.proColor }}>{photo}</div>
                    <div className={`${mode}-description-details`}>
                        <div>
                            <p className="username">{this.props.video.username}</p>
                            <br/>
                            <p>Published on {this.props.video.published}</p>
                        </div>
                        <h2 className="description-text">{this.props.video.description}</h2>
                    </div>
                </div>
                    <br/>
                <div className="Comments-Container">
                    <CommentsIndexContainer props={this.props} mode={mode}/>
                </div>
            </div>
            <VideoListContainer />

        </div>
        );
    }


}

export default VideoShow;

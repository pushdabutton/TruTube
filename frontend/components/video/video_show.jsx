import React from 'react';
import { Link } from 'react-router-dom'

class VideoShow extends React.Component {
    constructor(props) {
        super(props)
        // this.state = this.props.video
        // debugger
    }

    componentDidMount() {
        
        let id = parseInt(this.props.match.params.videoId)
        this.props.fetchVideo(id)
    }

    
    render() {
        // debugger
        const { video } = this.props;
        if (!video) {
            return "loading";
        }
        return (
        <div className="video-page">
                
            <div className="video-box">
                <video src={this.props.video.url}
                        width="720" height="480" autoPlay controls >
                </video>
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

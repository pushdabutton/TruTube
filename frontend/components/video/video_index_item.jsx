import React from 'react'
import { Link } from 'react-router-dom'

const VideoIndexItem = ({ video }) => {
    return (
        <div className="vid-holder">
            <Link to={`/videos/${video.id}`} className="mini-video-box">
                <i className="fab fa-youtube video"></i>
            </Link>
            <p>{video.title}</p>
        </div>
    )
}


export default VideoIndexItem;
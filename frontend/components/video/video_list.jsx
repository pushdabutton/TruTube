import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoList extends React.Component {
    constructor(props){
        super(props)
        this.redirect = this.redirect.bind(this)
    }

    componentDidMount() {
        this.props.fetchVideos();
    }
    redirect(id) {
        this.props.history.push(`/videos/${id}`)
    }

    render() {
        let mode = this.props.ui.darkmode ? 'dark' : 'light'
        let videos = this.props.videos || [];
        videos = this.props.videos.map(video => {
            return (
                <div className="vid-list-holder" onClick={() => this.redirect(video.id)}>
                    <div className={`${mode}-vid-list-holder`} > 
                        <VideoIndexItem key={video.id} video={video} ui={this.props.ui}/>
                    </div>
                    <div className={`${mode}-vid-list-details`}>
                        <p>{video.title}</p>
                        <div className="mini-video-user">{video.username}</div>
                        <div className="mini-video-info"><span className="mini-views">{video.views || 0} views</span>&nbsp;•&nbsp;<span className="mini-views">{video.published}</span></div>
                    </div>
                </div>
            )
        }).slice(0,9);

        return (
                <div className="video-list">
                        {videos}
                </div>
        );
    }
}

export default VideoList;
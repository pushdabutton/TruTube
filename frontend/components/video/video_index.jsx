import React from 'react';
import VideoIndexItem from './video_index_item';
import leftNav from '../navbar/left-nav'

class VideoIndex extends React.Component{

    componentDidMount() {
        this.props.fetchVideos();
    }


    render() {
        const videos = this.props.videos.map(video => {
            return (
                <VideoIndexItem key={video.id} video={video} />
            );
        });

        return (
            <div className="frame">
                {leftNav()}
                <div className="video-index-list">
                    <div>
                        {videos}
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoIndex;

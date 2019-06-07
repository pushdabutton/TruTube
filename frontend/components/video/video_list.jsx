import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoList extends React.Component {

    componentDidMount() {
        this.props.fetchVideos();
    }


    render() {
        let videos = this.props.videos || [];
        videos = this.props.videos.map(video => {
            return (
                <VideoIndexItem key={video.id} video={video} />
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
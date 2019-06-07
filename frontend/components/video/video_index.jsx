import React from 'react';
import VideoIndexItem from './video_index_item';
import leftNav from '../navbar/left-nav'
import Randomize from '../../selectors/random_selector'

class VideoIndex extends React.Component{

    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {

        if(!this.props.videos) {return  null }

        let videos = this.props.videos.map(video => {
            return (
                <VideoIndexItem key={video.id} video={video} />
            );
        });

        let rec_videos = Randomize(Randomize(videos.slice(0)).slice(0, 9))
        let tren_videos = Randomize(Randomize(videos.slice(0)).slice(0, 9) )
        let recent_videos = Randomize(Randomize(videos.slice(0)).slice(0, 9))

        return (
            <div className="frame">
            {leftNav()}
                <div className="video-index-list">
                    <p className="Catergory-Words">Recommended</p>
                    <div className="index-video-box">
                        {rec_videos}
                    </div>
                    <p className="Catergory-Words">Trending</p>
                    <div className="index-video-box">
                        {tren_videos}
                    </div>
                    <p className="Catergory-Words">Recently Uploaded</p>
                    <div className="index-video-box">
                        {recent_videos}
                    </div>
                </div>
                
             </div>
        );
    }
}

export default VideoIndex;

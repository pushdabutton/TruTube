import React from 'react';
import VideoIndexItem from './video_index_item';
import leftNav from '../navbar/left-nav'
import Randomize from '../../selectors/random_selector'

class VideoSearchIndex extends React.Component {

    componentDidMount() {
        let query = this.props.history.location.search.slice(7)
        let params = { query }
        this.props.searchVideos(params);
    }

    componentDidUpdate(prevProps){
        if (prevProps.location !== this.props.location) {
            let query = this.props.history.location.search.slice(7)
            let params = {query}
            this.props.searchVideos(params); 
        }
    }

    render() {

        if (!this.props.videos) { return null }

        let videos = this.props.videos.map(video => {
            return (
                <VideoIndexItem key={video.id} video={video} />
            );
        });


        return (
            <div className="frame">
                {leftNav()}
                <div className="video-index-list">
                    <p className="Catergory-Words">Search Results</p>
                    <div className="index-video-box">
                        {videos}
                    </div>
                </div>

            </div>
        );
    }
}

export default VideoSearchIndex;
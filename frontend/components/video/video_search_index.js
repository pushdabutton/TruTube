import React from 'react';
import VideoIndexItem from './video_index_item';
import leftNav from '../navbar/left-nav'
import Randomize from '../../selectors/random_selector'

class VideoSearchIndex extends React.Component {

    constructor(props){
        super(props)
        this.redirect = this.redirect.bind(this)
    }

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

    redirect(id) {
        this.props.history.push(`/videos/${id}`)
    }

    render() {
        let mode = this.props.ui.darkmode ? 'dark' : 'light'

        if (!this.props.videos) { return null }

        let videos = this.props.videos.map(video => {
            return (
                <div className={`${mode}-vid-holder`} onClick={() => this.redirect(video.id)}> 
                <VideoIndexItem key={video.id} video={video} ui={this.props.ui} />
                <p>{video.title}</p>
                <div className="mini-video-user">{video.username}</div>
                <div className="mini-video-info"><span className="mini-views">{video.views || 0} views</span>&nbsp;•&nbsp;<span className="mini-views">{video.published}</span></div>
                </div>
            );
        });
        

        return (
            <div className={`${mode}-frame`}>
                {leftNav(mode)}
                <div className="video-index-list">
                    <p className={`${mode}-Catergory-Words`}>Search Results</p>
                    <div className="index-video-box">
                        {videos}
                    </div>
                    
                </div>

            </div>
        );
    }
}

export default VideoSearchIndex;
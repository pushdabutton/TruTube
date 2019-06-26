import React from 'react';
import VideoIndexItem from './video_index_item';
import leftNav from '../navbar/left-nav'
import Randomize from '../../selectors/random_selector'

class VideoIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = { mode: "light" }

        this.props.ui.darkmode

    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    componentDidUpdate(){
        // debugger
        // if (this.props.ui.darkmode == true) {
        //     this.setState({ mode: "dark" })
        // } else if (this.props.ui.darkmode === false){
        //     this.setState({ mode: "light" })
        // }
    }
    redirect(id) {
        return () => { this.props.history.push(`/videos/${id}`) }
    }

    render() {
        let mode = this.props.ui.darkmode ? 'dark' : 'light'

        if(!this.props.videos) {return  null }

        let videos = this.props.videos.map(video => {
            return (
                <div className={`${mode}-vid-holder`} onClick={this.redirect(video.id)}> 
                    <VideoIndexItem key={video.id} video={video} ui={this.props.ui}/>
                    <p>{video.title}</p>
                    <div className="mini-video-user">{video.username}</div>
                    <div className="mini-video-info"><span className="mini-views">{video.views || 0} views</span>&nbsp;•&nbsp;<span className="mini-views">{video.published}</span></div>
               </div>
            );
        });

        let rec_videos = Randomize(Randomize(videos.slice(0)).slice(0, 9))
        let tren_videos = Randomize(Randomize(videos.slice(0)).slice(0, 9) )
        let recent_videos = Randomize(Randomize(videos.slice(0)).slice(0, 9))
        return (
            <div className={`${mode}-frame`}>
            {leftNav(mode)}
                <div className="video-index-list">
                    <p className={`${mode}-Catergory-Words`}>Recommended</p>
                    <div className="index-video-box">
                        {rec_videos}
                    </div>
                    <br/>
                    <p className={`${mode}-Catergory-Words`}>Trending</p>
                    <div className="index-video-box">
                        {tren_videos}
                    </div>
                    <br/>
                    <p className={`${mode}-Catergory-Words`}>Recently Uploaded</p>
                    <div className="index-video-box">
                        {recent_videos}
                    </div>
                </div>
                
             </div>
        );
    }
}

export default VideoIndex;

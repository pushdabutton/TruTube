import * as VideoApiUtil from '../util/video_api_util';
import * as LikeApiUtil from '../util/like_api_util'

export const RECEIVE_VIDEO = 'RECEIVE_VIDEO'
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS'


export const fetchVideo = id => dispatch => (
    VideoApiUtil.fetchVideo(id).then( (video) => dispatch(receiveVideo(video)))
)

export const likeVideo = (like) => dispatch => (
    LikeApiUtil.createVideoLike(like).then( (video) => dispatch(receiveVideo(video)))
)

export const receiveVideo = (video) => ({
    type: RECEIVE_VIDEO,
    video
})



export const fetchVideos = () => dispatch => (
    VideoApiUtil.fetchvideos().then(videos => dispatch(receiveVideos(videos)))
)

export const searchVideos = query => dispatch => (
    VideoApiUtil.searchVideos(query).then(videos => dispatch(receiveVideos(videos)))
)

export const receiveVideos = videos => ({
    type: RECEIVE_VIDEOS,
    videos
})



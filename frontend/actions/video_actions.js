import * as VideoApUtil from '../util/video_api_util';

export const RECEIVE_VIDEO = 'RECEIVE_VIDEO'


export const fetchVideo = id => dispatch => (
    VideoApUtil.fetchVideo(id).then( (video) => dispatch(receiveVideo(video)))
)

export const receiveVideo = (video) => ({
    type: RECEIVE_VIDEO,
    video
})
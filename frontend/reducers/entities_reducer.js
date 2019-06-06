import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import { VideosReducer } from './videos_reducer';
import CommentsReducer from './comments_reducer';



const entitiesReducer = combineReducers({
    users: usersReducer,
    videos: VideosReducer,
    comments: CommentsReducer

});

export default entitiesReducer;
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root"
import {fetchVideo, fetchVideos} from './actions/video_actions'
import {fetchComments} from './actions/comment_actions'

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }


    window.store = store
    window.fetchVideo = fetchVideo
    window.fetchVideos = fetchVideos
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchComments = fetchComments


    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});


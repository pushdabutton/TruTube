
export const fetchVideo = id => {

    return (
    $.ajax({
        method: 'get',
        url: `api/videos/${id}`
    })
    )
};

export const fetchvideos = () => {

    return(
        $.ajax({
            method: 'GET',
            url: 'api/videos'
        })
    )
}

export const searchVideos = query => {
    
    return $.ajax({
        method: "GET",
        url: "/api/videos",
        data: query
    })
}

export const createVideo = video => {
    return (
        $.ajax({
            method: 'post',
            url: `/api/users/${video.user_id}/videos`,
            data: video
        })
    )
};

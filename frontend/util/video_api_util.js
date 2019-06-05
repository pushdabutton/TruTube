
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
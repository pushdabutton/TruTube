
export const fetchVideo = id => {
    return (
    $.ajax({
        method: 'get',
        url: `api/videos/${id}`
    })
    )
};
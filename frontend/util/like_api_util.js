export const createVideoLike = like => (
    $.ajax({
        url: `/api/videos/${like.likeable_id}/likes`,
        method: 'POST',
        data: { like }  
    })
)

// export const destroyVideoLike = like => (
//     $.ajax({
//         url: `/api/videos/${like.likeable_id}/likes/${like.id}`,
//     })
// )

export const createCommentLike = like => (
    $.ajax({
        url: `/api/comments/${like.likeable_id}/likes`,
        method: 'POST',
        data: { like }
    })
)
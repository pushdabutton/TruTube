export const fetchComments = id => {

    return (
        $.ajax({

            method: 'get',
            url: `api/videos/${id}/comments`
        })
    )
};


export const createComment = comment => (
    $.ajax({

        url: `api/videos/${comment.author_id}/comments`,
        method: 'POST',
        data: { comment }

    })
);

export const deleteComment = comment => (
    
    $.ajax({

        url: `api/videos/${comment.video_id}/comments/${comment.id}`,
        method: 'DELETE'
    })
);
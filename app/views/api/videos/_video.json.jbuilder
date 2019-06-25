
json.extract! video, :id, :author_id, :url, :title, :description, :views, :totalLikes, :photo, :username, :published
    json.photoUrl url_for(video.video)
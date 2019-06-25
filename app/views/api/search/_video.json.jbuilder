json.extract! video, :id, :author_id, :url, :title, :description, :views
    json.photoUrl url_for(video.video)
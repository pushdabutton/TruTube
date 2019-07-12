class Comment < ApplicationRecord
    validates :video_id, :author_id, :body, presence: true

    belongs_to :video

    belongs_to :user,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_many :likes, as: :likeable


    def author
        user.username
    end

    def totalLikes
        hash = {likes: 0, dislikes: 0}
        likes.each do |like|
            hash[:likes] += 1 if like.vote
            hash[:dislikes] += 1 if !like.vote
        end
        return hash
    end

    def photo
        if user.photo.attached?
            return url_for(user.photo)
        else
            return false
        end
    end

end

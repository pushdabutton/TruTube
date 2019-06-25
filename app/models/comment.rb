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

    def photo
        if user.photo.attached?
            return url_for(user.photo)
        else
            return false
        end
    end

end

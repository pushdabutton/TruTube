class Comment < ApplicationRecord
    validates :video_id, :author_id, :body, presence: true

    belongs_to :video

    belongs_to :user,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User


    def author
        user.username
    end

end

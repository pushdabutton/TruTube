class Video < ApplicationRecord
    validates :title, :author_id, presence: true

    has_one_attached :video

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User
end

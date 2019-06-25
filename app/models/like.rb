class Like < ApplicationRecord

    validates :user_id, presence: true

    belongs_to :likeable, polymorphic: true

    belongs_to :user

    # belongs_to :video

    # belongs_to :comment

end
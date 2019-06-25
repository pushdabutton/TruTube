class Video < ApplicationRecord

    include PgSearch
    multisearchable against: [:title, :description]

    validates :title, :author_id, presence: true

    has_one_attached :video
    
    
    has_many :likes, as: :likeable


    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_many :comments


    pg_search_scope :search, against: [
        :title,
        :description,
        ]


    def published
      return self.created_at.strftime("%B %d, %Y")
   
    end

    def username
        author.username
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
        if author.photo.attached?
            return url_for(author.photo)
        else
            return false
        end
    end

end

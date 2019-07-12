class User < ApplicationRecord

    validates :username, :email, :password_digest, :session_token, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :username, :email, :session_token,  uniqueness: true

    attr_reader :password

    after_initialize :ensure_session_token

    has_one_attached :photo

    has_many :videos
    
    has_many :likes

    def picture
        if self.photo.attached?
            return url_for(self.photo)
        else
            return false
        end
    end

    def liked_videos
        hash = {liked: [], disliked: []}
        self.likes.each do |like|
            if like.likeable_type == "Video"
                if like.vote == true
                    hash[:liked] << like.likeable_id
                else
                    hash[:disliked] << like.likeable_id
                end
            end
        end
        return hash
    end

    def liked_comments
        hash = {liked: [], disliked: []}
        self.likes.each do |like|
            if like.likeable_type == "Comment"
                if like.vote = true
                    hash[:liked] << like.likeable_id 
                else
                    hash[:disliked] << like.likeable_id
                end
            end
        end
        return hash
    end

    def self.find_by_cred(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

end

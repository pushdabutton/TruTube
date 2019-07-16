class Api::VideosController < ApplicationController
    
    before_action :ensure_logged_in, only: [:create]

    def index

        if params[:query]
            str = params[:query].downcase
          @videos = Video.where("lower(title) LIKE ? or lower(description) LIKE ?", "%#{str}%", "%#{str}%")

        else
            @videos = Video.all

        end
        
    end

    def create
        @video = Video.new(video_params)
        @video.author_id = current_user.id
        if @video.save
            render :show
        else
            render json: @video.errors.full_messages
        end
    end

    def show
        @video = Video.find(params[:id])
        @video.views = 0 if @video.views == nil
        @video.views += 1
        @video.save!
    end


    def video_params
        params.require(:video).permit(:title, :url, :author_id)
    end

end
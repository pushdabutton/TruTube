class Api::VideosController < ApplicationController
    
    before_action :ensure_logged_in, only: [:create]

    def index
        @videos = Video.all
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
        @video = Video.find_by(:id)
    end


    def video_params
        params.require(:video).permit(:title, :url, :author_id)
    end

end
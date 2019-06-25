class Api::LikesController < ApplicationController

    # before_action :ensure_logged_in

    def create
        @like =Like.find_by(user_id: current_user.id, likeable_id: params[:like][:likeable_id], likeable_type: "Video")

        if @like
            @like.destroy
            @video = Video.find(like_params[:likeable_id])
            render 'api/videos/show'
        else
            @like = Like.new(like_params)
            @like.user_id = current_user.id
            
            @like.save!
            # render @like.errors.full_messages
            @video = Video.find(like_params[:likeable_id])
            render 'api/videos/show'
        end
    end

    def update
        @like = current_user.likes.find(params[:id])
        @like.update_attributes(like_params)
        render 'api/videos/show'

    end

    def destroy
        @like = Like.find(params[:id])
        @like.destroy
        render 'api/videos/show'
        
    end

    def like_params
        params.require(:like).permit(:vote, :likeable_type, :likeable_id, :user_id)
    end




end
class Api::CommentsController < ApplicationController


    def show
        @comment = Comment.find(params[:id])
    end

    def index
        @comments = Comment.all.where(video_id: params[:video_id])

    end



    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        @comment.video_id = params[:video_id]
        if @comment.save
            render 'api/videos/show'
        else
            render json: @comment.errors.full_messages, status: 422
        end

    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
        render 'api/videos/show'
    end

    def comment_params
        params.require(:comment).permit(:body)
    end
end
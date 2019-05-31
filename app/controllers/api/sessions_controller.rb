class Api::SessionsController < ApplicationController
    
    def new

    end

    def create 

        @user = User.find_by_cred(params[:user][:email],
                                  params[:user][:password])

        if @user
            log_in(@user)
            render "api/users/show"
        else
            render json: ["Invalid Email/Password"], status: 401
        end
    end

    def destroy
        if current_user
            log_out
            render json: {} 
        else
            render json: ["No Current User"], status: 404
        end

    end





end
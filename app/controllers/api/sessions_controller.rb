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
            render json: ["Nice Try Brah"], status: 401
        end
    end

    def destroy
        log_out
        render "api/users/show" #not sure where else to go yet

    end





end
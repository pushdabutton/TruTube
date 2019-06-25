class SearchController < ApplicationController

    def index
        if params[:query].present
            @videos = Video.search(params[:query])
        else
            @videos = Video.all
        end

        
    end

end
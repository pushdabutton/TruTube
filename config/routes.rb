Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do

    resources :videos, only: [:index, :show] do
      resources :comments, only: [:create, :edit, :destroy, :update, :index]
    end

    

    resources :users, only: [:create] do
      resources :videos, only: [:create]
      
    end

    resource :session, only: [:create, :destroy, :show]
  end
  
end

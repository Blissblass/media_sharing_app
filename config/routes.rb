Rails.application.routes.draw do
  devise_for :users
  resources :songs, only: [:new, :create, :edit, :update, :destroy]
  resources :likes, only: [:new, :create, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do 
    post '/already_liked', to: 'songs#song_already_liked?'
    get '/home_feed', to: 'songs#fetch_home_feed'
    get '/song_query', to: 'songs#song_query'
  end
  
end

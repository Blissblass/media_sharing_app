Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do 
    get '/current_user', to: 'user#fetch_current_user'
    get '/home_feed', to: 'post#fetch_home_feed'
  end
end

Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do 
    get '/current_user', to: 'users#fetch_current_user'
    get '/home_feed', to: 'songs#fetch_home_feed'
  end
  
end

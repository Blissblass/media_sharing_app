class ApplicationController < ActionController::API
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up)  { |u| u.permit( :username, :email, :password, :password_confirmation ) }
  end
end

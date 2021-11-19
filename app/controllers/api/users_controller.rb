class Api::UsersController < ApplicationController

  def fetch_user_profile
    @user = User.find(params[:id])
    render json: @user
  end

end
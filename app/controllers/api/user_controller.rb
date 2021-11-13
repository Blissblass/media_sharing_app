class Api::UsersController < ApplicationController

  def fetch_current_user
    @user = current_user || nil 
    if @user
      render json: @user
    else
      render json: { msg: 'User not found!' }
    end
  end

end
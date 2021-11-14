class Api::UsersController < ApplicationController

  def fetch_current_user
    @user = current_user
    if @user
      render json: { user: @user, type: 'success' }
    else
      render json: { msg: 'Logged In user not found!', type: 'err' }
    end
  end

end
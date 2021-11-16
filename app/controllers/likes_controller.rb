class LikesController < ApplicationController

  def new
    @like = Like.new
  end

  def create 
    @like = Like.new(like_params)
    if @like.save 
      render json: @like 
    else
      render json: @like.errors.full_messages
    end
  end

  def destroy 
    @like = Like.find(params[:id])
    @like.destroy
  end


end
class LikesController < ApplicationController

  def new
    @like = Like.new
  end

  def create
    if params[:like][:type] == 'Song'
      song_fetch = Song.find(params[:like][:id])
      @poly = Like.new(likeable: song_fetch, liker_id: params[:like][:liker_id])

    elsif params[:like][:type] == 'Comment'
      comment_fetch = Comment.find(params[:like][:id])
      @poly = Like.new(likeable: comment_fetch, liker_id: params[:like][:liker_id])

    elsif params[:like][:type] == 'User'
      user_fetch = User.find(params[:like][:id])
      @poly = Like.new(likeable: user_fetch, liker_id: params[:like][:liker_id]) # Could have used a switch statement but i thought it was unnecessary
    end

    if @poly.save 
      render json: @poly
    else
      render json: @poly.errors.full_messages
    end
  end

  def destroy 
    @like = Like.find(params[:id])
    @like.destroy
  end

  private 

  def like_params 
    params.require(:like).permit(:type, :liker_id, :id)
  end


end
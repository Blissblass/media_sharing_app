class Api::UsersController < ApplicationController

  def fetch_user_profile
    @user = User.includes(:likes, :songs).find(params[:id])

    @liked_songs = @user.liked_songs.map do |song|
      song.attributes.merge(
        'media' => url_for(song.media), 
        'user' => song.user,
        'likes' => song.likes.count
      )
    end

    @songs = @user.songs.map do |song|
      song.attributes.merge(
        'media' => url_for(song.media), 
        'user' => song.user,
        'likes' => song.likes.count
      )
    end

    render json: { user: @user, likes: @liked_songs, songs: @songs, follows: @user.follows.count }
  end

  def follow_user 
  end

  def already_following
    @follow = Like.where(likeable_type: 'User', likeable_id: params[:followee_id], liker_id: params[:follower_id])[0]

    if @follow
      render json: {status: true, id: @follow.id} 
    else
      render json: {status: false, id: nil}
    end
  end

end
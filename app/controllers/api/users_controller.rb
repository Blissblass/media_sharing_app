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

    render json: { user: @user, likes: @liked_songs, songs: @songs }
  end

end
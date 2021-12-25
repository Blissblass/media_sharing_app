class Api::SongsController < ApplicationController

  def fetch_home_feed
    songs_fetch = Song.all.with_attached_media.includes(:user).order(created_at: :desc)

    @songs = songs_fetch.map do |song|
      song.attributes.merge(
        'media' => rails_blob_path(song.media, disposition: 'attachment'),
        'user' => song.user,
        'likes' => song.likes.count
      )
    end
    render json: @songs
  end

  def song_already_liked?
    song = Song.find(params[:id])
    @liked = song.likes.where(liker_id: params[:liker_id])
    render json: @liked unless @liked.nil?
  end

  def song_query
    return fetch_home_feed if params[:query].length < 2

    songs_fetch = Song.where("title LIKE ?", "%#{params[:query]}%").with_attached_media.includes(:user).order(created_at: :desc)
    @songs = songs_fetch.map do |song|
      song.attributes.merge(
        'media' => url_for(song.media),
        'user' => song.user,
        'likes' => song.likes.count
      )
    end
    
    render json: @songs
  end
  
  private

end
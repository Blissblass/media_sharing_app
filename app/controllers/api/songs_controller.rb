class Api::SongsController < ApplicationController

  def fetch_home_feed
    songs_fetch = Song.all.with_attached_media.includes(:user).order(created_at: :desc)
    @songs = songs_fetch.map { |song| song.attributes.merge('media' => url_for(song.media)) }
    render json: @songs
  end

end
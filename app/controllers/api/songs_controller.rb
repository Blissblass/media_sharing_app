class Api::SongsController < ApplicationController

  def fetch_home_feed
    @songs = Song.all.order(created_at: :desc)
    render json: @songs
  end

end
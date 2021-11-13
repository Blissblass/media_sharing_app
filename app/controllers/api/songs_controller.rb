class SongsController < ApplicationController

  def fetch_home_feed
    @songs = Song.all.order(like.count)
    render json: @songs
  end

end
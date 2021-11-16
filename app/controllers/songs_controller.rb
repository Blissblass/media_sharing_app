class SongsController < ApplicationController

  def new 
    @song = Song.new
  end

  def create 
    @song = Song.new(song_params)
    return unless @song.media.content_type.starts_with?("audio")
    
    if @song.save
      render json: @song
    else
      render json: @song.errors.full_messages
    end
  end

  def edit
    @song = Song.find(params[:id])
  end

  def update 
    @song = Song.find(params[:id])
    if @song.update(song_params) 
      render json: @song
    else
      render json: @song.errors.full_messages
    end
  end

  def destroy 
    @song = Song.find(params[:id])
    @song.destroy
  end

  private 

  def song_params 
    params.require(:song).permit(:title, :user_id, :media)
  end

end
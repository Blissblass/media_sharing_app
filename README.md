# README

# Project: Media Sharing App

![Sound.io home screen](https://i.imgur.com/zIjgWvw.png)

Sound.io is my second fullstack React app and also my second solution to App Academy's **Full Stack Course**. My goal was to create an application where **User**s (implemented through the Devise gem) can share and **Like** **Song**s. My main focus on this project was to create an app that uses efficient active storage queries and expresses the actions to the user through an interactive UI.

# Challenges

The only major challenge I had to face during the app's production was the query for fetching all songs for the Home component. Since songs are quite large in size, having an inefficient query can slow down things quite a bit, especially when using AWS S3 as the storage for the app's media.

The speeding up of the query is done through the use of #with_attached_{active_storage_attachment_name}, a method that Rails provides as a workaround to N+1 queries, which would slow down the fetching *quite* a lot.

```ruby
  def fetch_home_feed
    songs_fetch = Song.all.with_attached_media.includes(:user).order(created_at: :desc) # We do the initial fetching

    @songs = songs_fetch.map do |song| # We map over the songs we get and,
      song.attributes.merge( # Add some attributes to to be used on the frontend
        'media' => url_for(song.media), # Is already preloaded by Rails thanks to #with_attached_media
        'user' => song.user,
        'likes' => song.likes.count
      )
    end
    render json: @songs
  end
```

I also initially had a tough time figuring out how the Like relation would work for both Users and Songs, but implemented a polymorphic association to fix the problem soon enough.

# Screenshots

![User page on sound.io](https://imgur.com/VXIpM5U)

![Sign up page on sound.io](https://i.imgur.com/VzSW620.png)

# To Do

Allowing users to comment on Songs and Users would be a logical addition, and it'd also be a great opportunity to use another polymorphic association to handle things cleanly and efficiently.

Querying songs by the username of the person who posted it is also a necessary feature that I intend to add in the future, this could be easily done by allowing the user to choose a query option or by checking the query string against both Users and Songs on the backend.

# Technologies used

Bootstrap for fast and easy styling, using the CSS grid classes provided by bootstrap for the app. The data for Users, Songs and Likes are saved on the Rails PostgresSQL database, and the media attached to a Song is saved to an AWS S3 bucket. 
The test songs used are He was a good stalker by Eduard Artemyev and Dirge for the planet by Firelake.



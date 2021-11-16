class Song < ApplicationRecord
  belongs_to :user
  has_many :likes, :as => :likeable
  has_many :comments, :as => :commentable
  has_one_attached :media
end
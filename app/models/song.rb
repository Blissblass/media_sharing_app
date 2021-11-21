class Song < ApplicationRecord
  belongs_to :user
  has_many :likes, :as => :likeable
  has_one_attached :media, dependent: :destroy
end
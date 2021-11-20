class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  validates :username, :email, :password, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 8 }
  
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :songs       
  has_many :sent_comments, class_name: 'Comment', foreign_key: 'commenter_id'
  has_many :comments, :as => :commentable
  has_many :likes, class_name: 'Like', foreign_key: 'liker_id'
  has_many :liked_songs, :through => :likes, :source => :likeable, :source_type => 'Song'
end

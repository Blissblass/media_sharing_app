class Like < ApplicationRecord
  belongs_to :likeable, :polymorphic => true
  belongs_to :user, class_name: 'User', primary_key: 'id', foreign_key: 'liker_id'
end
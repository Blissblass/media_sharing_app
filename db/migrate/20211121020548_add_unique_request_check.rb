class AddUniqueRequestCheck < ActiveRecord::Migration[6.1]
  def change
    add_index :likes, [:liker_id, :likeable_id, :likeable_type], unique: true
  end
end

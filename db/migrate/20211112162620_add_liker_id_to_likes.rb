class AddLikerIdToLikes < ActiveRecord::Migration[6.1]
  def change
    add_column :likes, :liker_id, :integer
    add_index :likes, :liker_id
  end
end

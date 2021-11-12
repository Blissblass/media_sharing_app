class AddCommenterIdIndexToComments < ActiveRecord::Migration[6.1]
  def change
    add_index :comments, :commenter_id
  end
end

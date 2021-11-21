class DropCommentsTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :comments
    # Unnecessary, would have lead to too much clutter for one app
  end
end

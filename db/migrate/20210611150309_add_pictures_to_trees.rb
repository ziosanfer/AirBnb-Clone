class AddPicturesToTrees < ActiveRecord::Migration[5.2]
  def change
    add_column :trees, :pic, :string 
  end
end

class CreateTrees < ActiveRecord::Migration[5.2]
  def change
    create_table :trees do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.timestamps
    end
  end
end

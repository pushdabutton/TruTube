class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.string :url

      t.timestamps
    end
    add_index :videos, :title
  end
end

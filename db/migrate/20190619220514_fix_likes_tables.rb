class FixLikesTables < ActiveRecord::Migration[5.2]
  def change
    drop_table :likes
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.boolean :vote, null: false

      t.references :likeable, polymorphic: true, index: true

    end
  end
end

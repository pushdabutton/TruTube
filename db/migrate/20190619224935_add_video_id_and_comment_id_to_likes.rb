class AddVideoIdAndCommentIdToLikes < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :video_id, :integer
    add_column :likes, :comment_id, :integer
    add_index(:likes, :user_id)
    add_index(:likes, :video_id)
  end
  
end

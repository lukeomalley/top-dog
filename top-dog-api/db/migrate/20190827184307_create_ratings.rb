# frozen_string_literal: true

class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :dog, foreign_key: true
      t.boolean :good_dog

      t.timestamps
    end
  end
end

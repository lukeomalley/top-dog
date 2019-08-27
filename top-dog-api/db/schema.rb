# frozen_string_literal: true

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20_190_827_193_736) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'dogs', force: :cascade do |t|
    t.string 'name'
    t.string 'breed'
    t.bigint 'user_id'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.string 'image_url'
    t.index ['user_id'], name: 'index_dogs_on_user_id'
  end

  create_table 'ratings', force: :cascade do |t|
    t.bigint 'user_id'
    t.bigint 'dog_id'
    t.boolean 'good_dog'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['dog_id'], name: 'index_ratings_on_dog_id'
    t.index ['user_id'], name: 'index_ratings_on_user_id'
  end

  create_table 'users', force: :cascade do |t|
    t.string 'email'
    t.string 'name'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  add_foreign_key 'dogs', 'users'
  add_foreign_key 'ratings', 'dogs'
  add_foreign_key 'ratings', 'users'
end

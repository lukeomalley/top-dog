# frozen_string_literal: true

module Types
  class DogType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :breed, String, null: false
    field :image_url, String, null: false
    field :is_good_dog, Boolean, null: false
    field :user, Types::UserType, null: true
  end
end

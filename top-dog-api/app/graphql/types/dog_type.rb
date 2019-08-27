module Types
  class DogType < Types::BaseObject
    field :name, String, null: false
    field :breed, String, null: false
    field :user, [Types::UserType], null: false
  end
end

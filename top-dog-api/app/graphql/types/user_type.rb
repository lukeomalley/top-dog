module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :email, String, null: false
    field :dogs, [Types::DogType], null: true
    field :dog_count, Integer, null: true

    def dog_count
      object.dogs.size
    end
  end
end

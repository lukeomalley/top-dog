# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :users, [Types::UserType], null: false
    def users
      User.all
    end

    field :user, Types::UserType, null: false do
      argument :id, ID, required: true
    end
    def user(id:)
      User.find(id)
    end

    field :dogs, [Types::DogType], null: false
    def dogs
      Dog.all
    end

    field :dog, Types::DogType, null: false do
      argument :id, ID, required: true
    end
    def dog(id:)
      Dog.find(id)
    end
  end
end

# frozen_string_literal: true

module Types
  class RatingType < Types::BaseObject
    field :good_dog, Boolean, null: false
  end
end

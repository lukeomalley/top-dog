class Dog < ApplicationRecord
  has_many :ratings, dependent: :destroy
  belongs_to :user
end
